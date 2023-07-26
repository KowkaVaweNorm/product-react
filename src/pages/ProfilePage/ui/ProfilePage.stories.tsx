/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage

};

export default meta;
type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
  decorators: [
    (Story: any) => (
      StoreDecorator({})(Story)
    )
  ],
  render: () => <ProfilePage />
};

export const Dark: Story = {
  decorators: [
    (Story: any) => (
      ThemeDecorator(Theme.DARK)(Story)
    ),
    (Story: any) => (
      StoreDecorator({})(Story)
    )
  ],
  render: () => <ProfilePage />
};
