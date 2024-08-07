/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown

};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>

export const Light: Story = {
  decorators: [
    (Story) => (
      StoreDecorator({})(Story)
    )
  ],
  render: () => <AvatarDropdown />
};
export const AuthAvatarDropdown: Story = {
  decorators: [
    (Story) => (
      StoreDecorator({
        user: { authData: { id: '', username: '' } }
      })(Story)
    )
  ],
  render: () => <AvatarDropdown />
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    ),
    (Story) => (
      StoreDecorator({})(Story)
    )
  ],
  render: () => <AvatarDropdown />
};
