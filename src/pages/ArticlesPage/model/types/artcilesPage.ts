import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleView, type Article } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
  page: number
  limit?: number
  hasMore: boolean
  _inited: boolean
}
