/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink

};

export default meta;
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  render: () => <AppLink to='/' theme={AppLinkTheme.PRIMARY}>TEXT</AppLink>
};

export const Secondary: Story = {
  render: () => <AppLink to='/' theme={AppLinkTheme.SECONDARY}>TEXT</AppLink>
};

export const Red: Story = {
  render: () => <AppLink to='/' theme={AppLinkTheme.RED}>TEXT</AppLink>
};

export const PrimaryDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <AppLink to='/' theme={AppLinkTheme.PRIMARY}>TEXT</AppLink>
};

export const SecondaryDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <AppLink to='/' theme={AppLinkTheme.SECONDARY}>TEXT</AppLink>
};

export const RedDark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <AppLink to='/' theme={AppLinkTheme.RED}>TEXT</AppLink>
};
