export { articlesPageReducer } from './model/slices/articlePageSlice';

export {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from './model/selectors/articlesPageSelectors';

export type { ArticlesPageSchema } from './model/types/artcilesPage';
