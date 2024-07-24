import '@/app/styles/index.scss';
import { type StoryFn } from '@storybook/react/*';

export const StyleDecorator = (StoryComponent: StoryFn): JSX.Element => {
  return (
      <>
          <StoryComponent />
      </>
  );
};
