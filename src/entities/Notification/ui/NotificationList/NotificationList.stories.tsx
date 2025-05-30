/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';

import { NotificationList } from './NotificationList';
import { type Notification } from '../../model/types/notification';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
  title: 'entities/NotificationList',
  component: NotificationList,
  decorators: [(Story: any) => StoreDecorator({})(Story)],
};

const testData: Notification[] = [
  {
    id: '1',
    title: 'Title1',
    description: 'desc1',
  },
  {
    id: '2',
    title: 'Title2',
    description: 'desc2',
  },
];

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/notifications', () => {
          return HttpResponse.json(testData);
        }),
      ],
    },
  },
};
export const PrimaryLoading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('*/notifications', async () => {
          return await new Promise(() => {
            // Ничего не делаем, оставляем promise неразрешенным
          });
        }),
      ],
    },
  },
};
