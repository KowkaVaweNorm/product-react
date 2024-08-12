import {
  type StateSchema,
  type ReduxStoreWithManager,
  type ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, type AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkConfig,
};
