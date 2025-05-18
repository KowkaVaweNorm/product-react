/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/AvatarGuest-minify.jpg';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
};

const stubData = {
  id: '',
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'Kowka',
  first: 'michael',
  city: 'Voronezh',
  currency: Currency.USD,
  avatar,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
  args: {
    readonly: true,
    data: stubData,
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
export const WithError: Story = {
  args: {
    error: 'true',
  },
};
