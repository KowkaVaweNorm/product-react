import { type EntityState } from '@reduxjs/toolkit';

import { type ArticleType, type ArticleBlock } from '@/entities/Article';
export type ArticleBlockDraft = ArticleBlock & { draftId: string };
export interface IArticleCreateSchema {
  title: string;
  subtitle: string;
  img: string;
  createdAt: string;
  userId: string;
  type: ArticleType[];
  blocks: EntityState<ArticleBlockDraft>;
}
