/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button

}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button>TEXT</Button>
}
export const Clear: Story = {
  render: () => <Button theme={ThemeButton.CLEAR}>TEXT </Button>
}
export const Outline: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>TEXT </Button>
}
export const OutlineDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Button theme={ThemeButton.OUTLINE}>TEXT </Button>
}
