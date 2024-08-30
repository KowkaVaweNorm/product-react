/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'shared/redesigned/StarRating',
  component: StarRating,
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Light: Story = {};

export const Dark: Story = {};
