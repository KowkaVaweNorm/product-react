/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const LightDeprecated: Story = {
  args: {
    articleId: '0',
  },
};

export const Light: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    articleId: '0',
  },
};

export const DarkDeprecated: Story = {
  args: {
    articleId: '0',
  },
};

export const Dark: Story = {
  decorators: [
    (Story) =>
      FeaturesFlagsDecorator({
        isAppRedesigned: true,
      }),
  ],
  args: {
    articleId: '0',
  },
};
