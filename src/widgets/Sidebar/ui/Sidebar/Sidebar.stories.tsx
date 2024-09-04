/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: {
          authData: {},
        },
      })(Story),
  ],
};

export const NoAuth: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: {},
      })(Story),
  ],
};
