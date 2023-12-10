import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading =
(state: StateSchema): boolean => state.articlesPage?.isLoading ?? false;
export const getArticlesPageError =
(state: StateSchema): string | undefined => state.articlesPage?.error;
export const getArticlesPageView =
(state: StateSchema): ArticleView => state.articlesPage?.view ?? ArticleView.SMALL;
export const getArticlesPageNum =
(state: StateSchema): number => state.articlesPage?.page ?? 1;
export const getArticlesPageLimit =
(state: StateSchema): number => state.articlesPage?.limit ?? 9;
export const getArticlesPageHasMore =
(state: StateSchema): boolean => state.articlesPage?.hasMore ?? false;
