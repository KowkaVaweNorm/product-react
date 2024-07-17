import type { Preview } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Suspense } from 'react';
import { RouteDecorator } from '@/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
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
    (Story) => (
        <Suspense fallback=''>
            <Story />
        </Suspense>
    ),
    (Story) => (
        <StyleDecorator>
            <Story />
        </StyleDecorator>
    ),
    (Story) => (
      ThemeDecorator(Theme.LIGHT)(Story)
    ),
    (Story) => (
      RouteDecorator(Story)
    )
  ],
  loaders: [mswLoader]
};

export default preview;
