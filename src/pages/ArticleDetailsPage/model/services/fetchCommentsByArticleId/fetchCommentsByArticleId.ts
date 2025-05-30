import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (articleId === undefined) {
    return rejectWithValue('error');
  }

  try {
    const response = await extra.api.get<Comment[]>('/comments/', {
      params: {
        articleId,
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
});
