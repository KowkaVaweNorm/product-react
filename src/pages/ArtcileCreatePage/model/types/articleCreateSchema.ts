import { type ArticleType, type ArticleBlock } from '@/entities/Article';
import { type EntityState } from '@reduxjs/toolkit';
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
