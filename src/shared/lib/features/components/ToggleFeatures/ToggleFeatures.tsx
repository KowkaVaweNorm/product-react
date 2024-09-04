import { type ReactElement } from 'react';
import { type FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../../lib/setGetFeatures';

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
