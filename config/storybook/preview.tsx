import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { I18nDecorator } from 'shared/config/storybook/i18nDecorator/i18nDecorator'

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
    (Story) => (
      I18nDecorator(Story)
    )
  ]
}

export default preview
