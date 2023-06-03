/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeButton } from 'shared/ui/Button'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar

}

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  render: () => <Navbar />
}

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Navbar />
}
