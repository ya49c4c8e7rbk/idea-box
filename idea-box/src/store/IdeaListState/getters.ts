import { GetterTree } from 'vuex';
import { IdeaListState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<IdeaListState, RootState> = {
  ideaList: (state, getter, rootState, rootGetter) => {
    state.ideaList.sort((a: any, b: any) => {
      const aLikeCount = a.likeList ? Object.keys(a.likeList).length : 0;
      const bLikeCount = b.likeList ? Object.keys(b.likeList).length : 0;
      return (aLikeCount > bLikeCount) ? -1 : (aLikeCount < bLikeCount) ? 1 : 0;
    });

    state.ideaList.map((data: any) => {
      // 既にいいねをしたかどうか
      data.alreadyLike = false;
      for (const i in data.likeList) {
        if (data.likeList[i] === rootGetter['userState/userId']) {
          data.alreadyLike = true;
        }
      }

      // いいね数
      data.likeCount = data.likeList ? Object.keys(data.likeList).length : 0;

      // アイコン名
      data.iconName = 'trip_origin';
      if (data.likeCount >= 2) {
        data.iconName = 'star';
      }
    });

    return state.ideaList;
  },
};
