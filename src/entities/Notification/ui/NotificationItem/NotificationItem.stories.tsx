/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/NotificationItem',
  component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
  args: {
    item: {
      id: '',
      title: 'Title header',
      description: 'Desctiption this',
      href: '/',
    },
  },
};
