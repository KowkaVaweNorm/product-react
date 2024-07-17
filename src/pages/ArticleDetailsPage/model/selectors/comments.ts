import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading =
(state: StateSchema): boolean | undefined => state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError =
(state: StateSchema): string | undefined => state.articleDetailsPage?.comments?.error;
