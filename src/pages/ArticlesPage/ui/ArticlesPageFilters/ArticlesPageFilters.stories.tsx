/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings, userActions } from '@/entities/User';
import { useEffect } from 'react';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;
export const PrimaryOldDesign: Story = {
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
              isAppRedesigned: false,
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
