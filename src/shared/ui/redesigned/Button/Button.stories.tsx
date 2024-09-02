/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button } from './Button';
// eslint-disable-next-line kowka-vn-plugin/layer-imports
import { saveJsonSettings, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    screenshot: {
      viewport: 'iPhone 5',
    },
  },
  decorators: [
    (Story: StoryFn) => {
      const dispatch = useAppDispatch();
      useEffect(() => {
        dispatch(
          saveJsonSettings({
            isArticlesPageWasOpened: false,
            isFirstVisit: false,
          }),
        );
        dispatch(
          userActions.setAuthData({
            features: {
              isAppRedesigned: true,
            },
            id: '1',
            username: 'Kowka',
          }),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};
