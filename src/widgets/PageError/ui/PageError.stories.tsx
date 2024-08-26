/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

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
  render: () => <PageError />,
};
