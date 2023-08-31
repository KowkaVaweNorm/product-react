/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './AvatarGuest-minify.jpg';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar

};

export default meta;
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg
  }
};
export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg
  }
};
