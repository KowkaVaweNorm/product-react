/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
};
// TODO: Добавить состояние загрузки
export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
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
