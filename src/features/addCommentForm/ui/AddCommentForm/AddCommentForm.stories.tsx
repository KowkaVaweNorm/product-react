/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
  decorators: [
    (Story: StoryFn) =>
      StoreDecorator({
        addCommentForm: {
          text: 'text comment',
          error: undefined,
        },
      })(Story),
  ],
  render: () => <AddCommentForm onSendComment={action('onSendComment')} />,
};

export const Dark: Story = {
  decorators: [
    (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
    (Story: StoryFn) =>
      StoreDecorator({
        addCommentForm: {
          text: 'text comment',
          error: undefined,
        },
      })(Story),
  ],
  render: () => <AddCommentForm onSendComment={action('onSendComment')} />,
};
