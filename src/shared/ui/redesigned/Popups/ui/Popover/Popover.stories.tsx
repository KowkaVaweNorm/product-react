/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
// TODO: Сделать отображение относительно заданного направления
// TODO: Сделать выделение на hover

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {
    direction: 'bottom right',
    trigger: <button>Trigger</button>,
    children: 'children nodes',
  },
};
