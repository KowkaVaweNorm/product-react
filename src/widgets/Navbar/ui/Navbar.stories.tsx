/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  decorators: [(Story) => StoreDecorator({})(Story)],
  render: () => <Navbar />,
};
export const AuthNavbar: Story = {
  decorators: [
    (Story) =>
      StoreDecorator({
        user: { authData: { id: '', username: '' } },
      })(Story),
  ],
  render: () => <Navbar />,
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story), (Story) => StoreDecorator({})(Story)],
  render: () => <Navbar />,
};
