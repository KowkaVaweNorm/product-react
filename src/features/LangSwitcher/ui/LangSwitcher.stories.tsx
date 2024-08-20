import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { I18nDecorator } from '@/shared/config/storybook/i18nDecorator/i18nDecorator';

const meta = {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
  decorators: [I18nDecorator],
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightShortDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    short: true,
  },
};
export const LightShort: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    short: true,
  },
};
export const DarkShortDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    short: true,
  },
};
export const DarkShort: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    short: true,
  },
};

export const LightLongDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    short: false,
  },
};
export const LightLong: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    short: false,
  },
};
export const DarkLongDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    short: false,
  },
};
export const DarkLong: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    short: false,
  },
};
