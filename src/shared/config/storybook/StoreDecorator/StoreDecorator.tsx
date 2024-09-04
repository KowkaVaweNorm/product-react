/* eslint-disable kowka-vn-plugin/layer-imports */
import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { articlesPageReducer } from '@/pages/ArticlesPage';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/addCommentForm';
import { Reducer } from 'redux';

const defaultAsyncReducers: ReducersList | { ['fillStateReducer']?: Reducer<NonNullable<any>> } = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
