/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleSortField } from '@/entities/Article';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector

};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>

export const Light: Story = {
  args: {
    sort: ArticleSortField.VIEW,
    order: 'desc',
    onChangeOrder: (props) => {
      console.log(props);
    },
    onChangeSort (props) {
      console.log(props);
    }
  }
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  args: {
    sort: ArticleSortField.VIEW,
    order: 'desc',
    onChangeOrder: (props) => {
      console.log(props);
    },
    onChangeSort (props) {
      console.log(props);
    }
  }
};
