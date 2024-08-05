/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating

};

export default meta;
type Story = StoryObj<typeof StarRating>

export const Light: Story = {
  render: () => <StarRating />
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <StarRating />
};
