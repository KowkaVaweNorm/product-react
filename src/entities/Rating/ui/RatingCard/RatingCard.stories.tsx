/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/RatingCard',
  component: RatingCard

};

export default meta;
type Story = StoryObj<typeof RatingCard>

export const Light: Story = {
  render: () => <RatingCard />
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <RatingCard />
};
