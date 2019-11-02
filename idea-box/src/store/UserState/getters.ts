import { GetterTree } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<UserState, RootState> = {
  userId: (state) => {
    if (state.userInfo !== null
      && state.userInfo.email !== null
    ) {
      return state.userInfo.email;
    }

    return null;
  },
};
