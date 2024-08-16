/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleView } from '@/entities/Article';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const LightBig: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
export const LightSmall: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};

export const DarkBig: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: {
    view: ArticleView.BIG,
  },
};
export const DarkSmall: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: {
    view: ArticleView.SMALL,
  },
};
