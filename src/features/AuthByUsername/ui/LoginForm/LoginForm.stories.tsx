/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;
export const Primary: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        loginForm: {
          username: '123',
          password: 'asd',
          isLoading: false,
        },
      })(Story),
  ],
  render: () => <LoginForm onSuccess={() => {}} />,
};
export const WithError: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        loginForm: {
          username: '123',
          password: 'asd',
          isLoading: false,
          error: 'ERROR',
        },
      })(Story),
  ],
  render: () => <LoginForm onSuccess={() => {}} />,
};
export const Loading: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        loginForm: {
          password: '',
          username: '',
          isLoading: true,
        },
      })(Story),
  ],
  render: () => <LoginForm onSuccess={() => {}} />,
};
