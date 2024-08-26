/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/depreacated/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
      TEXT
    </AppLink>
  ),
};

export const Secondary: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
      TEXT
    </AppLink>
  ),
};

export const Red: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.RED}>
      TEXT
    </AppLink>
  ),
};

export const PrimaryDark: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
      TEXT
    </AppLink>
  ),
};

export const SecondaryDark: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
      TEXT
    </AppLink>
  ),
};

export const RedDark: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.RED}>
      TEXT
    </AppLink>
  ),
};
