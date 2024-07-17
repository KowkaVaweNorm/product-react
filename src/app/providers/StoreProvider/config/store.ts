import {
  type ReducersMapObject,
  configureStore,
  type Reducer,
  type CombinedState
} from '@reduxjs/toolkit';
import { type ThunkExtraArg, type StateSchema } from './StateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { pageReducer } from '@/widgets/Page';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>

): any {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    page: pageReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  };

  const reducerManager = createReducerManager(rootReducers);
  const extraArg: ThunkExtraArg = {
    api: $api

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
      }).concat(rtkApi.middleware)
    });

  // @ts-expect-error  Временное решение
  store.reducerManager = reducerManager;

  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
