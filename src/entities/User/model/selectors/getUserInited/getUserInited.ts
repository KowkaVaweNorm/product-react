import { type StateSchema } from 'app/providers/StoreProvider';
import { type User } from '../../types/user';

export const getUserInited = (state: StateSchema): boolean | undefined => state?.user?._inited;
