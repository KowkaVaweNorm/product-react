/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;
const stubArgs = {
  onChangeType: (type: any) => {
    console.log(type);
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
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: stubArgs,
};
export const Dark: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: stubArgs,
};
