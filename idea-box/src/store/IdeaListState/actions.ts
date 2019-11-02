import { ActionTree } from 'vuex';
import { IdeaListState } from './types';
import { RootState } from '../types';
import firebase from '@/firebase';
import { firebaseAction } from 'vuexfire';

const db = firebase.database();
const ideaListRef = db.ref('ideaList');

export const actions: ActionTree<IdeaListState, RootState> = {
  init: firebaseAction((context, ref): void => {
    context.bindFirebaseRef('ideaList', ref);
  }),
  add: firebaseAction((context, idea): void => {
    ideaListRef.push(idea);
  }),
  remove: firebaseAction((context, key) => {
    ideaListRef.child(key).remove();
  }),
  removeRef: firebaseAction((context, ref) => {
    ref.remove();
  }),
  like: firebaseAction((context, text): void => {
    context.state.ideaList.map((data: any) => {
      if (data['.key'] !== text.key) {
        return;
      }

      if (!data.likeList) {
        ideaListRef.child(text.key).child('likeList').push(text.userId);
        return;
      }

      let isOk = true;
      for (const i in data.likeList) {
        if (data.likeList[i] === text.userId) {
          isOk = false;
          context.dispatch('removeRef', ideaListRef.child(text.key).child('likeList').child(i));
        }
      }
      if (isOk) {
        ideaListRef.child(text.key).child('likeList').push(text.userId);
      }
    });
  }),
};
