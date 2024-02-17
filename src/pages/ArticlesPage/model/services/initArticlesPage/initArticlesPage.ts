import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { type SortOrder } from 'shared/types/sort';
import { type ArticleType, type ArticleSortField } from 'entities/Article';

export const initArticlesPage =
createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isInited = getArticlesPageInited(getState());

    if (!isInited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search') as string;
      const typeFromUrl = searchParams.get('type') as ArticleType;
      if (orderFromUrl !== null) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl !== null) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl !== null) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }
      if (typeFromUrl !== null) {
        dispatch(articlesPageActions.setType(typeFromUrl));
      }

      dispatch(articlesPageActions.initState());
      await dispatch(fetchArticlesList({}));
    }
  }
);
