import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage =
createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isInited = getArticlesPageInited(getState());

    if (!isInited) {
      dispatch(articlesPageActions.initState());
      await dispatch(fetchArticlesList({
        page: 1
      }));
    }
  }
);
