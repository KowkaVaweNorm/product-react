import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

export function createReduxStore (initialState?: StateSchema):
ReturnType< typeof configureStore<StateSchema>> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: userReducer,
    loginForm: loginReducer
  }
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
