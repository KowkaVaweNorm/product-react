import { getFeatureFlag } from './setGetFeatures';

import { type FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
  if (getFeatureFlag(name) ?? false) {
    return on();
  }

  return off();
}
