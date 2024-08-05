/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from '../Text/Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card

};

export default meta;
type Story = StoryObj<typeof Card>

export const Light: Story = {
  render: () => <Card><Text title='test title' text='text title'/></Card>
};

export const Dark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <Card ><Text title='test title' text='text title'/></Card>
};
