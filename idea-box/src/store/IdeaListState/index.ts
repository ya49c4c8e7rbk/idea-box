import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IdeaListState } from './types';
import { RootState } from '../types';

export const state: IdeaListState = {
  ideaList: [],
};

const namespaced: boolean = true;

export const ideaListState: Module<IdeaListState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
