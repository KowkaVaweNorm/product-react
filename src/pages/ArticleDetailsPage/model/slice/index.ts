import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentReducer,
  recommendations: articleDetailsPageRecommendationsReducer,
});
