import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from '../type/article';

export const getArticleDetailsData =
(state: StateSchema): Article | undefined => state.articleDetails?.data;
export const getArticleDetailsIsLoading =
(state: StateSchema): boolean | undefined => state.articleDetails?.isLoading;
export const getArticleDetailsError =
(state: StateSchema): string | undefined => state.articleDetails?.error;
