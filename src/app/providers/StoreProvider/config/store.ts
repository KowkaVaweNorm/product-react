import {
  type ReducersMapObject,
  configureStore,
  type Reducer,
  type CombinedState
} from '@reduxjs/toolkit';
import { type ThunkExtraArg, type StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { type To, type NavigateOptions } from 'react-router-dom';

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
): any {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);
  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate

  };

  const store =
    configureStore({
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      })
    });

  // @ts-expect-error  Временное решение
  store.reducerManager = reducerManager;

  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
