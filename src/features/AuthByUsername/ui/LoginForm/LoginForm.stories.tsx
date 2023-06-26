/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5'
    }
  }
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
  render: () => <LoginForm/>
}
