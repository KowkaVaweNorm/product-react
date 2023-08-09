import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsLoading =
(state: StateSchema): boolean | undefined => state.profile?.isLoading;
