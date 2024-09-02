/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
  title: 'shared/AppImage',
  component: AppImage,
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
  },
};
export const PrimaryError: Story = {
  args: {
    src: '/gap',
    errorFallback: true,
  },
};
