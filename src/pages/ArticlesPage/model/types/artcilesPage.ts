import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleView, type Article } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
}
