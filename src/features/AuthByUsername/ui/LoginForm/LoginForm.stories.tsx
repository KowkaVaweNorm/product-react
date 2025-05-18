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
  args: {
    onSuccess() {},
  },
};

export const PrimaryLoading: Story = {
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
  args: {
    onSuccess() {},
  },
};
export const PrimaryWithError: Story = {
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
  args: {
    onSuccess() {},
  },
};
