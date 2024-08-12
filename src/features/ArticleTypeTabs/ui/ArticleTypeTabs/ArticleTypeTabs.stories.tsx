/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Light: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeType: (type) => {
      console.log(type);
    },
  },
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: {
    value: ArticleType.ALL,
    onChangeType: (type) => {
      console.log(type);
    },
  },
};
