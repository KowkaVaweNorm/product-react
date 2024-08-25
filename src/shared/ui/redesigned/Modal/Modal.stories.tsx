/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae vitae doloremque, vel
        laborum similique quos nostrum maiores tempora quod, dolore, nemo rerum? Suscipit
        consectetur enim expedita cumque velit dolores sunt?
      </p>
    ),
  },
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  args: {
    isOpen: true,
    children: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae vitae doloremque, vel
        laborum similique quos nostrum maiores tempora quod, dolore, nemo rerum? Suscipit
        consectetur enim expedita cumque velit dolores sunt?
      </p>
    ),
  },
};
