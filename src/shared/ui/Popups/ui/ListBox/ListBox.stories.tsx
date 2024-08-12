/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
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
type Story = StoryObj<typeof ListBox>;

export const TopLeft: Story = {
  args: {
    direction: 'top left',
    defaultValue: 'Выпадающий список',
    items: [
      {
        content: '12aasdfsdf',
        value: '1',
      },
      {
        content: '22aasdfsdf',
        value: '2',
      },
      {
        content: '32aasdfsdf',
        value: '3',
      },
    ],
    onChange: action,
  },
};
export const TopRight: Story = {
  args: {
    direction: 'top right',
    defaultValue: 'Выпадающий список',
    items: [
      {
        content: '12aasdfsdf',
        value: '1',
      },
      {
        content: '22aasdfsdf',
        value: '2',
      },
      {
        content: '32aasdfsdf',
        value: '3',
      },
    ],
    onChange: action,
  },
};
export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
    defaultValue: 'Выпадающий список',
    items: [
      {
        content: '12aasdfsdf',
        value: '1',
      },
      {
        content: '22aasdfsdf',
        value: '2',
      },
      {
        content: '32aasdfsdf',
        value: '3',
      },
    ],
    onChange: action,
  },
};
export const BottomRight: Story = {
  args: {
    direction: 'bottom right',
    defaultValue: 'Выпадающий список',
    items: [
      {
        content: '12aasdfsdf',
        value: '1',
      },
      {
        content: '22aasdfsdf',
        value: '2',
      },
      {
        content: '32aasdfsdf',
        value: '3',
      },
    ],
    onChange: action,
  },
};
