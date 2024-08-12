import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLoginError = (state: StateSchema): string | undefined => state?.loginForm?.error;
