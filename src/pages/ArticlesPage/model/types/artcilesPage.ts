import { type EntityState } from '@reduxjs/toolkit';
import {
  type ArticleView,
  type Article,
  type ArticleSortField,
  type ArticleType,
} from '@/entities/Article';

import { type SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;

  // filter
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
  _inited: boolean;
}
