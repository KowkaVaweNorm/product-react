/* eslint-disable kowka-vn-plugin/layer-imports */
import { type StoryFn } from '@storybook/react';
import { StoreProvider, type StateSchema } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/editableProfileCard';
import { addCommentFormSliceReducer } from '@/features/addCommentForm';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { articlesPageReducer } from '@/pages/ArticlesPage';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormSliceReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
