/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const LightDeprecated: Story = {
  decorators: [
    (Story: StoryFn) =>
      StoreDecorator({
        addCommentForm: {
          text: 'text comment',
          error: undefined,
        },
      })(Story),
  ],
  args: {
    onSendComment: () => {
      action('onSendComment');
    },
  },
};
export const Light: Story = {
  decorators: [
    (Story: StoryFn) =>
      StoreDecorator({
        addCommentForm: {
          text: 'text comment',
          error: undefined,
        },
      })(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    onSendComment: () => {
      action('onSendComment');
    },
  },
};

export const DarkDeprecated: Story = {
  decorators: [
    (Story: StoryFn) =>
      StoreDecorator({
        addCommentForm: {
          text: 'text comment',
          error: undefined,
        },
      })(Story),
  ],
  args: {
    onSendComment: () => {
      action('onSendComment');
    },
  },
};
export const Dark: Story = {
  decorators: [
    (Story: StoryFn) =>
      StoreDecorator({
        addCommentForm: {
          text: 'text comment',
          error: undefined,
        },
      })(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    onSendComment: () => {
      action('onSendComment');
    },
  },
};
