import type { Preview } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

initialize();

const themes: (keyof typeof Theme)[] = ['LIGHT', 'DARK', 'ORANGE'];
const design: ('old' | 'new')[] = ['new', 'old'];
const preview: Preview = {
  globalTypes: {
    // Иконки можно посмотреть туть : https://5a375b97f4b14f0020b0cda3-wbeulgbetj.chromatic.com/?path=/story/basics-icon--labels
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: themes,
        dynamicTitle: true,
      },
    },
    design: {
      description: 'Global theme for components',
      defaultValue: 'new',
      toolbar: {
        title: 'Design',
        icon: 'contrast',
        items: design,
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
    chromatic: {
      modes: {
        light_new: {
          design: 'new',
          theme: Theme.LIGHT
        },
        light_old: {
          design: 'old',
          theme: Theme.LIGHT
        }
      },
    },
  },

  decorators: [
    SuspenseDecorator,
    StyleDecorator,
    ThemeDecorator,
    StoreDecorator({}),
    NewDesignDecorator,
    RouteDecorator,
  ],
  loaders: [mswLoader],
};

export default preview;
