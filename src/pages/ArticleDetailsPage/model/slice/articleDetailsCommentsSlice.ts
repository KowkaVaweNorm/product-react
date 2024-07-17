import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';
import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailsPage?.comments ?? commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCommentsByArticleId.pending, (state) => {
          state.error = undefined;
          state.isLoading = true;
        })
      .addCase(fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        })
      .addCase(fetchCommentsByArticleId.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
  }
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentsSlice;
