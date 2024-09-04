import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { testDataEditableProfileCard } from '../../model/slices/__tests__/testData';

const meta: Meta<typeof EditableProfileCardHeader> = {
  title: 'features/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
  decorators: [
    (Story) =>
      StoreDecorator({
        profile: testDataEditableProfileCard.filledState,
      })(Story),
  ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Light: Story = {};
