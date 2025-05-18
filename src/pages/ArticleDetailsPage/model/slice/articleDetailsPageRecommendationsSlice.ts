import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchArticleRecommendation } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { type ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { type Article } from '@/entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (comment: Article) => comment.id,
});

export const getArticlePageRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations ?? recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendation.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendation.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } =
  articleDetailsPageRecommendationsSlice;
