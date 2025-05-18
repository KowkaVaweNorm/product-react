/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { type Comment } from '../../model/types/comment';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
};

const list: Comment[] = [
  {
    id: '1',
    text: 'Статья топ',
    user: {
      id: '1',
      username: 'Kowka',
      avatar:
        'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
    },
  },
  {
    id: '2',
    text: 'Статья топ почти',
    user: {
      id: '2',
      username: 'Mavrody',
      avatar:
        'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
    },
  },
  {
    id: '3',
    text: 'Статья дно',
    user: {
      id: '2',
      username: 'Mavrody',
      avatar:
        'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
    },
  },
];

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    comments: list,
  },
};
export const PrimaryLoading: Story = {
  args: {
    comments: list,
    isLoading: true,
  },
};
export const PrimaryNoData: Story = {};
