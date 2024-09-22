import { lazy } from 'react';

export {
  ArticleBlockType,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from './model/consts/articleConsts';

export { articleDetailsReducer } from './model/slice/articleDetailsSlice';

export {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './model/selectors/articleDetails';

export { ArticleList } from './ui/ArticleList/ArticleList';
export type { ArticleDetailsSchema } from './model/type/articleDetailsSchema';
export type { Article, ArticleBlock } from './model/type/article';
export const ArticleDetails = lazy(
  async () => await import('./ui/ArticleDetails/ui/ArticleDetails'),
);
