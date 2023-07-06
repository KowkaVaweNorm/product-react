/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text

}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  render: () => <Text title='title lorem' text='text lorem ipsum tralalala' />
}

export const Error: Story = {
  render: () => <Text
      title='title lorem'
      text='text lorem ipsum tralalala'
      theme= {TextTheme.ERROR}
  />
}

export const onlyTitle: Story = {
  render: () => <Text title='Title lorem'/>
}
export const onlyText: Story = {
  render: () => <Text text='Text lorem'/>
}
export const PrimaryDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Text title='title lorem' text='text lorem ipsum tralalala' />
}

export const onlyTitleDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Text title='Title lorem'/>
}
export const onlyTextDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Text text='Text lorem'/>
}
