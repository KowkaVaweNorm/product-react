/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import cls from './AvatarDropdown.stories.module.scss';
import { UserRole } from '@/entities/User';
const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
};
// TODO: Для светлой темы старого дизайна сделать обводку, мб даже на все дизайны сделать обводку
export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const PrimaryNoAuth: Story = {};

export const PrimaryAvatar: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: { authData: { id: '', username: '' } },
      })(Story),
  ],
  args: {
    className: cls.Centered,
  },
};
export const PrimaryAvatarAdmin: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: {
          authData: {
            id: '',
            username: '',
            roles: [UserRole.ADMIN],
          },
        },
      })(Story),
  ],
  args: {
    className: cls.Centered,
  },
};
