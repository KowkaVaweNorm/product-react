import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType, type Article } from '@/entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { toggleFeatures } from '@/shared/lib/features';
import { getArticlesQuery } from '../../../api/articleApi';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';
// TODO: replace is need?
interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = toggleFeatures({
  name: 'isGraphqlEnabled',
  on: () =>
    createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
      'articlePage/fetchArticlesList',
      async (props, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi;
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());

        try {
          addQueryParams({
            sort,
            order,
            search,
            type,
          });
          console.log('start graphql request');

          const response = await dispatch(getArticlesQuery());
          console.log('response graphql request:', response.data);

          if (response.data === undefined) {
            throw new Error();
          }
          return response.data;
        } catch (error) {
          console.log(error);
          return rejectWithValue('error');
        }
      },
    ),
  off: () =>
    createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
      'articlePage/fetchArticlesList',
      async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        console.log('feature graph:', getAllFeatureFlags());
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());
        try {
          addQueryParams({
            sort,
            order,
            search,
            type,
          });

          const response = await extra.api.get<Article[]>('/articles', {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
              _order: order,
              _sort: sort,
              q: search,
              type: type === ArticleType.ALL ? undefined : type,
            },
          });

          if (response.data === undefined) {
            throw new Error();
          }
          return response.data;
        } catch (error) {
          console.log(error);
          return rejectWithValue('error');
        }
      },
    ),
});
