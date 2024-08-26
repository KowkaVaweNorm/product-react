import type { Preview } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

initialize();

const themes: (keyof typeof Theme)[] = ['LIGHT', 'DARK', 'ORANGE'];

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: themes,
        dynamicTitle: true,
      },
    },
  },
  // TODO: Разобраться в необходимости данных параметров
  parameters: {
    screenshot: {
      delay: 200,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    SuspenseDecorator,
    StyleDecorator,
    ThemeDecorator,
    StoreDecorator({}),
    FeaturesFlagsDecorator({
      isAppRedesigned: false,
    }),
    RouteDecorator,
  ],
  loaders: [mswLoader],
};

export default preview;
