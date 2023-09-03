import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileError =
(state: StateSchema): string | undefined => state.profile?.error;
