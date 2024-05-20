import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5'
    }
  }
};

export default meta;
  type Story = StoryObj<typeof EditableProfileCard>
export const Primary: Story = {

};
