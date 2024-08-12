import { type StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { type SortOrder } from '@/shared/types/sort';

export const getArticlesPageIsLoading = (state: StateSchema): boolean =>
  state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: StateSchema): string | undefined =>
  state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema): ArticleView =>
  state.articlesPage?.view ?? ArticleView.SMALL;
export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema): number => state.articlesPage?.limit ?? 9;
export const getArticlesPageHasMore = (state: StateSchema): boolean =>
  state.articlesPage?.hasMore ?? false;
export const getArticlesPageInited = (state: StateSchema): boolean =>
  state.articlesPage?._inited ?? false;
export const getArticlesPageOrder = (state: StateSchema): SortOrder =>
  state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateSchema): ArticleSortField =>
  state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema): string =>
  state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateSchema): ArticleType =>
  state.articlesPage?.type ?? ArticleType.ALL;
