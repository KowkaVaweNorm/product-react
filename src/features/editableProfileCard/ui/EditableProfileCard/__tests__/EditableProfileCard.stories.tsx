import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from '../EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { testDataEditableProfileCard } from '../../../model/slices/__tests__/testData';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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
export const LightDeprecated: Story = {};
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
    ThemeDecorator(Theme.DARK),
  ],
};
