import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';
import { LayoutDecorator } from '@/shared/config/storybook/LayoutDecorator/LayoutDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryShort: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    short: true,
  },
};
export const PrimaryShortDark: Story = {
  decorators: [LayoutDecorator({ inverted: true })],
  args: {
    short: true,
  },
};
export const PrimaryLong: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    short: false,
  },
};
export const PrimaryLongDark: Story = {
  decorators: [LayoutDecorator({ inverted: true })],
  args: {
    short: false,
  },
};
