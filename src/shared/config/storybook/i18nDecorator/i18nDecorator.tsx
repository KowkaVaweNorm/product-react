// eslint-disable-next-line kowka-vn-plugin/fsd-path-checker
import i18n from 'shared/config/i18n/i18nStorybook';
import { type StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

export const I18nDecorator = (StoryComponent: StoryFn): JSX.Element => {
  return (
      <I18nextProvider i18n={i18n}>
          <StoryComponent />
      </I18nextProvider>
  );
};
