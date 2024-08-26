/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import cls from './AvatarDropdown.stories.module.scss';
const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const NoAuth: Story = {};

export const AvatarLightDeprecated: Story = {
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
export const AvatarLight: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: { authData: { id: '', username: '' } },
      })(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    className: cls.Centered,
  },
};
export const AvatarDarkDeprecated: Story = {
  decorators: [
    (Story) => (Story) =>
      StoreDecorator({
        user: { authData: { id: '', username: '' } },
      })(Story),
  ],
  args: {
    className: cls.Centered,
  },
};
export const AvatarDark: Story = {
  decorators: [
    (Story) => (Story) =>
      StoreDecorator({
        user: { authData: { id: '', username: '' } },
      })(Story),
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    className: cls.Centered,
  },
};
