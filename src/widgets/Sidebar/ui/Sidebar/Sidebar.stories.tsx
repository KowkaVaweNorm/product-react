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

export const Light: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: {
          authData: {},
        },
      })(Story),
  ],
  render: () => <Sidebar />,
};

export const Dark: Story = {
  decorators: [
    (Story) => (Story) =>
      StoreDecorator({
        user: {
          authData: {},
        },
      })(Story),
  ],
  render: () => <Sidebar />,
};
export const NoAuth: Story = {
  decorators: [
    (Story) => (Story) =>
      StoreDecorator({
        user: {},
      })(Story),
  ],
  render: () => <Sidebar />,
};
