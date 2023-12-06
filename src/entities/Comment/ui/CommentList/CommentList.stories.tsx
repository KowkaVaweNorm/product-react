/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { type Comment } from '../../model/types/comment';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList

};

const list: Comment[] = [
  {
    id: '1',
    text: 'Статья топ',
    user: {
      id: '1',
      username: 'Kowka',
      avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625'
    }
  },
  {
    id: '2',
    text: 'Статья топ почти',
    user: {
      id: '2',
      username: 'Mavrody',
      avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625'
    }
  },
  {
    id: '3',
    text: 'Статья дно',
    user: {
      id: '2',
      username: 'Mavrody',
      avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625'
    }
  }
];

export default meta;
type Story = StoryObj<typeof CommentList>

export const NormalLight: Story = {
  render: () => <CommentList comments={list} />
};
export const LoadingLight: Story = {
  render: () => <CommentList isLoading={true} comments={list}/>
};
export const NoDataLight: Story = {
  render: () => <CommentList />
};
export const NormalDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <CommentList comments={list} />
};
export const LoadingDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <CommentList isLoading={true} comments={list}/>
};
export const NoDataDark: Story = {
  decorators: [
    (Story: StoryFn) => (
      ThemeDecorator(Theme.DARK)(Story)
    )
  ],
  render: () => <CommentList />
};
