/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const PrimaryEdit: Story = {
  decorators: [
    (Story: any) =>
      StoreDecorator({
        profile: {
          form: {
            username: 'KowkaVN',
            age: 22,
            country: Country.Russia,
            lastname: 'Vlom',
            first: 'Kowka',
            city: 'Moscow',
            currency: Currency.USD,
          },
        },
      })(Story),
  ],
};
export const PrimaryReadonly: Story = {
  decorators: [
    (Story: any) =>
      StoreDecorator({
        profile: {
          readonly: true,
          form: {
            username: 'KowkaVN',
            age: 22,
            country: Country.Russia,
            lastname: 'Vlom',
            first: 'Kowka',
            city: 'Moscow',
            currency: Currency.USD,
          },
          data: {
            username: 'KowkaVN',
            age: 22,
            country: Country.Russia,
            lastname: 'Vlom',
            first: 'Kowka',
            city: 'Moscow',
            currency: Currency.USD,
          },
        },
      })(Story),
  ],
};
