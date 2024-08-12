/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Light: Story = {
  render: () => <ArticleRating articleId="0" />,
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => <ArticleRating articleId="0" />,
};
