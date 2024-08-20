/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

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

export const LightDeprecated: Story = {
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
export const Light: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        loginForm: {
          username: '123',
          password: 'asd',
          isLoading: false,
        },
      })(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    onSuccess() {},
  },
};

export const WithErrorDeprecated: Story = {
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
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    onSuccess() {},
  },
};

export const LoadingDeprecated: Story = {
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
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    onSuccess() {},
  },
};
