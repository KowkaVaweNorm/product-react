/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '@/entities/Article';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;
export const PrimaryBig: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
export const PrimarySmall: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
