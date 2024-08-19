/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/depreacated/Dropdown',
  component: Dropdown,
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
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    items: [
      {
        content: 'Войти',
        onClick: () => {
          console.log('hello');
        },
      },
      {
        content: 'Войти2',
        onClick: () => {},
      },
      {
        content: 'Войти3',
        onClick: () => {},
      },
    ],
    trigger: <button>Trigger Dropdown</button>,
  },
};
