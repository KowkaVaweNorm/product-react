import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { withScreenshot } from 'storycap'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
        <StyleDecorator>
            <Story />
        </StyleDecorator>
    ),
    (Story) => (
      ThemeDecorator(Theme.LIGHT)(Story)
    ),
    (Story) => (
      RouteDecorator(Story)
    ),
    withScreenshot
  ]
}

export default preview
