import { type StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidateErrors =
(state: StateSchema): any => state.profile?.validateError;
