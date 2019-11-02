import { MutationTree } from 'vuex';
import { UserState } from './types';
import firebase from 'firebase/app';

export const mutations: MutationTree<UserState> = {
  userInfo(state, payload: firebase.UserInfo | null) {
    state.userInfo = payload;
  },
};
