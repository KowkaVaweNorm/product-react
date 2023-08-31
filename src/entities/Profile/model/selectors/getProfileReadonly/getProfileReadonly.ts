import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly =
(state: StateSchema): boolean | undefined => state.profile?.readonly;
