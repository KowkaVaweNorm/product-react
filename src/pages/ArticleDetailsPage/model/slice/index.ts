import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { type ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentReducer,
  recommendations: articleDetailsPageRecommendationsReducer,
});
