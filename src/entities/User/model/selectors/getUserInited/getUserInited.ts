import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserInited = (state: StateSchema): boolean | undefined => state?.user?._inited;
