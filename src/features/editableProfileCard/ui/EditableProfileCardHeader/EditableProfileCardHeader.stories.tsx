import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { testDataEditableProfileCard } from '../../model/slices/__tests__/testData';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

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

export const LightDecorator: Story = {};
export const Light: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
};
export const DarkDeprecated: Story = {};
export const Dark: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
};
