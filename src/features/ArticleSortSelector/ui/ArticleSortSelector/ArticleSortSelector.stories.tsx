/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector, type IArticleSortSelectorProps } from './ArticleSortSelector';

import { ArticleSortField } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

const stubArgs: Partial<IArticleSortSelectorProps> = {
  sort: ArticleSortField.VIEW,
  order: 'desc',
  onChangeOrder: (props: any) => {
    console.log(props);
  },
  onChangeSort(props: any) {
    console.log(props);
  },
};
export const LightDeprecated: Story = {
  args: stubArgs,
};
export const Light: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: stubArgs,
};

export const DarkDeprecated: Story = {
  args: stubArgs,
};
export const Dark: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: stubArgs,
};
