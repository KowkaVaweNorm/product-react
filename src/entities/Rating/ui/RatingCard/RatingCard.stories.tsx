/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/RatingCard',
  component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Light: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
};
export const LightDeprecated: Story = {};

export const DarkDeprecated: Story = {};
export const Dark: Story = {
  decorators: [
    (Story) =>
      FeaturesFlagsDecorator({
        isAppRedesigned: true,
      }),
  ],
};
