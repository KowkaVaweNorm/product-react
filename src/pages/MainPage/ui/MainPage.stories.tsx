/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import MainPage from './MainPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage

}

export default meta
type Story = StoryObj<typeof MainPage>

export const Light: Story = {
  render: () => <MainPage />
}

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <MainPage />
}
