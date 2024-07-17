import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLoginLoading = (
  state: StateSchema
): boolean | undefined => state?.loginForm?.isLoading ?? false;
