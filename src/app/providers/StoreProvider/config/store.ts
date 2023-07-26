import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
):
  ReturnType< typeof configureStore<StateSchema>> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: CounterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store =
    configureStore<StateSchema>({
      reducer: reducerManager.reduce,
      devTools: __IS_DEV__,
      preloadedState: initialState
    });

  // @ts-expect-error  Временное решение
  store.reducerManager = reducerManager;

  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
