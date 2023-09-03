/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select

};

export default meta;
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    label: 'Type value',
    options: [
      { value: '123', content: 'text1' },
      { value: '234', content: 'text2' }
    ]
  }
};
