/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component: NotificationButton

};

export default meta;
type Story = StoryObj<typeof NotificationButton>

export const Light: Story = {
  render: () => <NotificationButton />
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <NotificationButton />
};
