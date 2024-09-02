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
import { fillStateAction, fillStateReducer } from './fillStateReducer';
import { Reducer } from 'redux';
import { useDispatch } from 'react-redux';

const defaultAsyncReducers: ReducersList | { ['fillStateReducer']?: Reducer<NonNullable<any>> } = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
  fillStateReducer: fillStateReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) => {
    const dispatch = useDispatch();
    dispatch(fillStateAction(state));
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
