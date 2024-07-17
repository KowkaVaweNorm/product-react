/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton

};

export default meta;
type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  },
  render: (args) => <Skeleton
      height={args.height}
      width={args.width} />
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  },
  render: (args) => <Skeleton
      border={args.border}
      height={args.height}
      width={args.width} />
};
export const NormalDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  args: {
    width: '100%',
    height: 200
  },
  render: (args) => <Skeleton
      height={args.height}
      width={args.width} />
};

export const CircleDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  args: {
    border: '50%',
    width: 100,
    height: 100
  },
  render: (args) => <Skeleton
      border={args.border}
      height={args.height}
      width={args.width} />
};
