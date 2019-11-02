import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { ideaListState } from './IdeaListState';
import { userState } from './UserState';
import { vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  mutations: {
    ...vuexfireMutations,
  },
  modules: {
    ideaListState,
    userState,
  },
};

export default new Vuex.Store<RootState>(store);
