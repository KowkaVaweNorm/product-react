import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

import { I18nDecorator } from '@/shared/config/storybook/i18nDecorator/i18nDecorator';

const meta = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
  decorators: [I18nDecorator],
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryShort: Story = {
  args: {
    short: true,
  },
};
export const PrimaryLong: Story = {
  args: {
    short: false,
  },
};
