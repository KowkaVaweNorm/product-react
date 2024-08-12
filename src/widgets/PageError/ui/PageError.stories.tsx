/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  render: () => <PageError />,
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => <PageError />,
};
