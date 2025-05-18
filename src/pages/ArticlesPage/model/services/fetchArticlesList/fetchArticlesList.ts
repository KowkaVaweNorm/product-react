import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType, type Article } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
// TODO: replace is need?
interface FetchArticlesListProps {
  replace?: boolean;
}
export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlePage/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
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
    if (__IS_DEV__) {
      console.log(error);
    }
    return rejectWithValue('error');
  }
});
