import { type StateSchema } from '@/app/providers/StoreProvider';
import { type FeatureFlags } from '@/shared/types/featureFlags';

export const getUserFeatureFlags =
  (flag: keyof FeatureFlags) =>
  (state: StateSchema): boolean =>
    state.user.authData?.features?.[flag] ?? false;
