/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>

export const Light: Story = {
  render: () => <AddCommentForm onSendComment={action('onSendComment')} />
};

export const Dark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <AddCommentForm onSendComment={action('onSendComment')} />
};
