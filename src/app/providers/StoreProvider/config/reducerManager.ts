import {
  type ReducersMapObject,
  combineReducers,
  type AnyAction,
  type Reducer
} from 'redux';
import {
  type StateSchemaKey,
  type StateSchema,
  type ReducerManager,
  type MountedReducers
} from './StateSchema';

export function createReducerManager (
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKey[] = [];

  const mountedReducers: MountedReducers = {};
  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if ((key.length === 0) || (reducers[key] != null)) {
        return;
      }

      reducers[key] = reducer;
      mountedReducers[key] = true;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if ((key.length === 0) || (reducers[key] == null)) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];

      keysToRemove.push(key);

      mountedReducers[key] = false;

      combinedReducer = combineReducers(reducers);
    }
  };
}
