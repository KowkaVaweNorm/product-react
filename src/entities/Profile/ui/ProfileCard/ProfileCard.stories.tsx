/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/AvatarGuest-minify.jpg';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

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
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: false,
    }),
  ],
  args: {
    readonly: true,
    data: stubData,
  },
};
export const LightRedesigned: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    readonly: true,
    data: stubData,
  },
};

export const WithError: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: false,
    }),
  ],
  args: {
    error: 'true',
  },
};
export const WithErrorRedesigned: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: false,
    }),
  ],
  args: {
    isLoading: true,
  },
};

export const LoadingRedesigned: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
  args: {
    isLoading: true,
  },
};
