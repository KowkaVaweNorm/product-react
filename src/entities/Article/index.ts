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
export type { Article } from './model/type/article';

export { ArticleDetails } from './ui/ArticleDetails/ui/ArticleDetails';
