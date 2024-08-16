/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/AvatarGuest-minify.jpg';

const meta: Meta<typeof ProfileCardDeprecated> = {
  title: 'entities/ProfileCardDeprecated',
  component: ProfileCardDeprecated,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;

export const Primary: Story = {
  args: {
    readonly: true,
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Kowka',
      first: 'michael',
      city: 'Voronezh',
      currency: Currency.USD,
      avatar,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
