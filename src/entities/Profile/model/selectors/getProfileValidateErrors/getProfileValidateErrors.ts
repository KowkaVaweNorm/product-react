import { type StateSchema } from 'app/providers/StoreProvider';
import { type ValidateProfileError } from '../../types/profile';

export const getProfileValidateErrors =
(state: StateSchema): any => state.profile?.validateError;
