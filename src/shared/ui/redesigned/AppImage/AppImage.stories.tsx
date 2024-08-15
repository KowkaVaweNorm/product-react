/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppImage> = {
  title: 'shared/AppImage',
  component: AppImage,
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Light: Story = {
  render: () => <AppImage />,
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => <AppImage />,
};
