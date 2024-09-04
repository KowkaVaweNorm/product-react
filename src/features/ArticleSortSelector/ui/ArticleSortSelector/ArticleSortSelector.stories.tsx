/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector, type IArticleSortSelectorProps } from './ArticleSortSelector';

import { ArticleSortField } from '@/entities/Article';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

const stubArgs: Partial<IArticleSortSelectorProps> = {
  sort: ArticleSortField.VIEWS,
  order: 'desc',
  onChangeOrder: (props: any) => {
    console.log(props);
  },
  onChangeSort(props: any) {
    console.log(props);
  },
};
export const Primary: Story = {
  args: stubArgs,
};
