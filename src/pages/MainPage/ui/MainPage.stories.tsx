/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [(Story) => StoreDecorator({})(Story)],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  render: () => <MainPage />,
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => <MainPage />,
};
