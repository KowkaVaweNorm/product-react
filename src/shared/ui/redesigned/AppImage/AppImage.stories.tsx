/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
  title: 'shared/AppImage',
  component: AppImage,
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Light: Story = {
  render: () => <AppImage />,
};

export const Dark: Story = {
  render: () => <AppImage />,
};
