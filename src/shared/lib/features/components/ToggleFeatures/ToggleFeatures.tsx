import { type ReactElement } from 'react';

import { getFeatureFlag } from '../../lib/setGetFeatures';

import { type FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlag(feature) ?? false) {
    return on;
  }

  return off;
};
