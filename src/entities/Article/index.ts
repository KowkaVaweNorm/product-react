
export { articleDetailsReducer } from "./model/slice/articleDetailsSlice";

export {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError
} from "./model/selectors/articleDetails";

export { ArticleTypeTabs } from "./ui/ArticleTypeTabs/ArticleTypeTabs";

export { ArticleSortSelector } from "./ui/ArticleSortSelector/ArticleSortSelector";

export { ArticleSortField, ArticleBlockType, ArticleType, ArticleView } from "./model/type/article";

export { ArticleViewSelector } from "./ui/ArticleViewSelector/ArticleViewSelector";

export { ArticleList } from "./ui/ArticleList/ArticleList";

export type { ArticleDetailsSchema } from "./model/type/articleDetailsSchema";
export type { Article } from "./model/type/article";

export { ArticleDetails } from "./ui/ArticleDetails/ui/ArticleDetails";
