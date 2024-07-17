/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { type Comment } from '../../model/types/comment';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard
};

const card: Comment = {
  id: '3',
  text: 'Статья дно',
  user: {
    id: '2',
    username: 'Mavrody',
    avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625'
  }
};

export default meta;
type Story = StoryObj<typeof CommentCard>

export const Light: Story = {
  render: () => <CommentCard comment={card}/>
};
export const LoadingLight: Story = {
  render: () => <CommentCard comment={card} isLoading={true}/>
};
export const NoDataLight: Story = {
  render: () => <CommentCard />
};

export const Dark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <CommentCard comment={card}/>
};
export const LoadingDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <CommentCard comment={card} isLoading={true}/>
};
export const NoDataDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <CommentCard />
};
