/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import ArticleRating from './ArticleRating';

import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'admin',
          roles: [UserRole.ADMIN],
          avatar:
            'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;
const stubData = [
  {
    userId: '1',
    articleId: '7',
    rate: 3,
    feedback: '',
    id: 'bcPnbbZ',
  },
];
export const PrimaryFilled: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/article-ratings?userId=1&articleId=0', () => {
          return HttpResponse.json(stubData);
        }),
      ],
    },
  },
  args: {
    articleId: '0',
  },
};
export const PrimaryNotFilled: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/article-ratings?userId=1&articleId=0', () => {
          return HttpResponse.json([]);
        }),
      ],
    },
  },
  args: {
    articleId: '0',
  },
};
