import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';
import { StoryFn } from '@storybook/react/*';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

export const NewDesignDecorator = (StoryComponent: StoryFn) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
