/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { type Comment } from '../../model/types/comment';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
};

const card: Comment = {
  id: '3',
  text: 'Статья дно',
  user: {
    id: '2',
    username: 'Mavrody',
    avatar:
      'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: card,
  },
};
export const PrimaryLoading: Story = {
  args: {
    comment: card,
    isLoading: true,
  },
};
export const PrimaryNoData: Story = {};
