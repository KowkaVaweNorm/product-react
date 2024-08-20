/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleView } from '@/entities/Article';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const LightBigDeprecated: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
export const LightBig: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    view: ArticleView.BIG,
  },
};
export const LightSmallDeprecated: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
export const LightSmall: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    view: ArticleView.SMALL,
  },
};

export const DarkBigDeprecated: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: {
    view: ArticleView.BIG,
  },
};
export const DarkBig: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    view: ArticleView.BIG,
  },
};
export const DarkSmallDeprecated: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: {
    view: ArticleView.SMALL,
  },
};
export const DarkSmall: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    view: ArticleView.SMALL,
  },
};
