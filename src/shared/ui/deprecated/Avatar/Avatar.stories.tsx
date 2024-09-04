/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/AvatarGuest-minify.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/depreacated/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
