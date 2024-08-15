/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
export const RowGap4: Story = {
  args: {
    direction: 'row',
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
export const RowGap8: Story = {
  args: {
    direction: 'row',
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
export const RowGap16: Story = {
  args: {
    direction: 'row',
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
export const RowGap32: Story = {
  args: {
    direction: 'row',
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>thirs</div>
      </>
    ),
  },
};
