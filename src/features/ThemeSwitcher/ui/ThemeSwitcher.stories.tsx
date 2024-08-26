/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/shared/const/theme';

import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const LightDeprecated: Story = {};
export const Light: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
};

export const DarkDeprecated: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
};
