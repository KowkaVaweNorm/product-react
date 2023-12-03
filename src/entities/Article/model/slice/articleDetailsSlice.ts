import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type ArticleDetailsSchema } from '../type/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type Article } from '../type/article';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // fetchArticleById
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
