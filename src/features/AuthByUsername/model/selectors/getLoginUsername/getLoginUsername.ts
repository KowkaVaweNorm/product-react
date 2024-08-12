import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema): string => state?.loginForm?.username ?? '';
