/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { AvatarDropdown } from './AvatarDropdown';
import cls from './AvatarDropdown.stories.module.scss';

import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
};
// TODO: Для светлой темы старого дизайна сделать обводку, мб даже на все дизайны сделать обводку
export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const PrimaryNoAuth: Story = {};

export const PrimaryAvatar: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/profile', () => {
          return HttpResponse.json({
            data: {
              avatar: '',
            },
          });
        }),
      ],
    },
  },
  decorators: [
    (Story) =>
      StoreDecorator({
        profile: {
          data: {
            avatar: '',
          },
        },
        user: { authData: { id: '', username: '' } },
      })(Story),
  ],
  args: {
    className: cls.Centered,
  },
};
export const PrimaryAvatarAdmin: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/profile', () => {
          return HttpResponse.json({
            data: {
              avatar: '',
            },
          });
        }),
      ],
    },
  },
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
