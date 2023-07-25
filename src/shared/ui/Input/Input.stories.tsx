/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  render: () => <Input placeholder='Ввод' />
};
export const Clear: Story = {
  render: () => <Input
      placeholder='Ввод'/>
};
