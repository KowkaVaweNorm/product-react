import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Article } from '../../type/article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      if (!id) {
        throw new Error('id не указано');
      }
      const response = await extra.api.get<Article>('/articles/' + id, {
        params: {
          _expand: 'user',
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
);
