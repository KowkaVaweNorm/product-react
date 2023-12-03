import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from '../../type/article';

export const fetchArticleById =
createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Article>('/articles/' + id);

      if (response.data === undefined) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  }
);
