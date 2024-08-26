/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/depreacated/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  render: (args) => <Skeleton height={args.height} width={args.width} />,
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  render: (args) => <Skeleton border={args.border} height={args.height} width={args.width} />,
};
export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  render: (args) => <Skeleton height={args.height} width={args.width} />,
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  render: (args) => <Skeleton border={args.border} height={args.height} width={args.width} />,
};
