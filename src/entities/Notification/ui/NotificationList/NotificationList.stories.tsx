/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
  title: 'entities/NotificationList',
  component: NotificationList

};

export default meta;
type Story = StoryObj<typeof NotificationList>

export const Primary: Story = {
};
