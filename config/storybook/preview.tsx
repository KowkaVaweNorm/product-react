import type { Preview } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    screenshot: {
      delay: 200
    }
  },
  decorators: [
    SuspenseDecorator,
    StyleDecorator,
    (Story) => (
      ThemeDecorator(Theme.LIGHT)(Story)
    ),
    RouteDecorator
  ],
  loaders: [mswLoader]
};

export default preview;
