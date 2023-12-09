import { type User } from 'entities/User';

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs?: string[]
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleVew {
  BIG = 'BIG',
  SMALL = 'SMALL'
}

export interface Article {
  id: string
  title: string
  user: User
  subtitle: string
  img: string
  views: number
  createdAt: string
  userId: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
