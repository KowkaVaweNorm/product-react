/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Primary: Story = {};
