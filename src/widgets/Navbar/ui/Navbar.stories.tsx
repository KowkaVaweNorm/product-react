/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  decorators: [(Story) => StoreDecorator({})(Story)],
};
export const AuthNavbar: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/profile', () => {
          return HttpResponse.json({
            data: {
              avatar: '',
            },
          });
        }),
      ],
    },
  },
  decorators: [
    (Story) =>
      StoreDecorator({
        user: { authData: { id: '', username: '' } },
      })(Story),
  ],
};
