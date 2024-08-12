/* eslint-disable kowka-vn-plugin/layer-imports */
import { type ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  type StateSchema,
  type ReduxStoreWithManager,
  type StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from 'redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children?: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps): JSX.Element => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      if (!(mounted ?? false)) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
