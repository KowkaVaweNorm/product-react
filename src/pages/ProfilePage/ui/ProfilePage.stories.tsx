/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage

};

export default meta;
type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
  decorators: [
    (Story: any) => (
      StoreDecorator({
        profile: {
          form: {
            username: 'KowkaVN',
            age: 22,
            country: Country.Russia,
            lastname: 'Vlom',
            first: 'Kowka',
            city: 'Moscow',
            currency: Currency.USD
          }
        }
      })(Story)
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
      StoreDecorator({
        profile: {
          form: {
            username: 'KowkaVN',
            age: 22,
            country: Country.Russia,
            lastname: 'Vlom',
            first: 'Kowka',
            city: 'Moscow',
            currency: Currency.USD
          }
        }
      })(Story)
    )
  ],
  render: () => <ProfilePage />
};
