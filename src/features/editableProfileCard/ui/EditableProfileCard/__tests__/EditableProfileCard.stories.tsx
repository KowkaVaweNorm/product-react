import type { Meta, StoryObj } from '@storybook/react';

import { testDataEditableProfileCard } from '../../../model/slices/__tests__/testData';
import { EditableProfileCard } from '../EditableProfileCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
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
type Story = StoryObj<typeof EditableProfileCard>;
export const Light: Story = {};
