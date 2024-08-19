import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';
import { StoryFn } from '@storybook/react/*';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: StoryFn) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
