/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  render: () => (
    <AppLink to="/" variant="primary">
      TEXT
    </AppLink>
  ),
};

export const Red: Story = {
  render: () => (
    <AppLink to="/" variant="red">
      TEXT
    </AppLink>
  ),
};
