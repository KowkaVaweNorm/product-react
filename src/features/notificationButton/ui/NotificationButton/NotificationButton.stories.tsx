/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component: NotificationButton,
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const LightDeprecated: Story = {};
export const Light: Story = {
  decorators: [
    FeaturesFlagsDecorator({
      isAppRedesigned: true,
    }),
  ],
};

export const DarkDeprecated: Story = {};
export const Dark: Story = {
  decorators: [
    (Story) =>
      FeaturesFlagsDecorator({
        isAppRedesigned: true,
      }),
  ],
};
