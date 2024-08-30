/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';

const meta: Meta<typeof ArticlePageGreeting> = {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Primary: Story = {};
