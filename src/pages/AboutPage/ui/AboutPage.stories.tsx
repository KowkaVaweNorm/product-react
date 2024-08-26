/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

import { I18nDecorator } from '@/shared/config/storybook/i18nDecorator/i18nDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  decorators: [(Story) => StoreDecorator({})(Story)],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  render: () => <AboutPage />,
};

export const Dark: Story = {
  decorators: [(Story) => (Story) => I18nDecorator(Story), (Story) => StoreDecorator({})(Story)],
  render: () => <AboutPage />,
};
