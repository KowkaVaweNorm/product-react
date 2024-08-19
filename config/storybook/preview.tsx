import type { Preview } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator';
initialize();

const preview: Preview = {
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
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
    FeaturesFlagsDecorator({
      isAppRedesigned: false,
    }),
    RouteDecorator,
  ],
  loaders: [mswLoader],
};

export default preview;
