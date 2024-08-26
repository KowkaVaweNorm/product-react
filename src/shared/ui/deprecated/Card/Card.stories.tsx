/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/depreacated/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
  render: () => (
    <Card>
      <Text title="test title" text="text title" />
    </Card>
  ),
};

export const Dark: Story = {
  render: () => (
    <Card>
      <Text title="test title" text="text title" />
    </Card>
  ),
};
