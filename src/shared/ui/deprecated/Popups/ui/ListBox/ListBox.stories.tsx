/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ListBox } from './ListBox';
// TODO: Сделать отображение относительно заданного направления
// TODO: Сделать выделение на hover

const meta: Meta<typeof ListBox> = {
  title: 'shared/depreacated/ListBox',
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

export const Primary: Story = {
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
