import { getUserAuthData } from '@/entities/User';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';
import { StoryContext, StoryFn } from '@storybook/react/*';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
type TDesign = 'old' | 'new';
export const NewDesignDecorator = (StoryComponent: StoryFn, context: StoryContext<any>) => {
  let design: TDesign = context.globals.design;
  const authData = useSelector(getUserAuthData);

  if (authData?.features?.isAppRedesigned === true) {
    design = 'new';
  }

  if (authData?.features?.isAppRedesigned === false) {
    design = 'old';
  }

  const [currentDesign, setCurrentDesign] = useState<TDesign>('old');
  useEffect(() => {
    switch (design) {
      case 'old':
        setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: false });
        setCurrentDesign('old');
        document.documentElement.classList.add('app');
        document.documentElement.classList.remove('app_redesigned');
        break;
      case 'new':
        setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
        setCurrentDesign('new');
        document.documentElement.classList.remove('app');
        document.documentElement.classList.add('app_redesigned');
        break;
      default:
        setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
        setCurrentDesign('new');
        break;
    }
  }, [design]);
  return (
    <div key={currentDesign} className={currentDesign === 'new' ? 'app_redesigned' : ''}>
      <StoryComponent />
    </div>
  );
};
