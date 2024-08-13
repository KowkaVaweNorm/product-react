import { type FeatureFlags } from '@/shared/types/featureFlags';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags != null) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
