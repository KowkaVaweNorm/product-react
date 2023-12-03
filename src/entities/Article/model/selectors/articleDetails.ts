import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from '../type/article';

export const getArtilceDetailsData =
(state: StateSchema): Article | undefined => state.articleDetails?.data;
export const getArtilceDetailsIsLoading =
(state: StateSchema): boolean | undefined => state.articleDetails?.isLoading;
export const getArtilceDetailsError =
(state: StateSchema): string | undefined => state.articleDetails?.error;
