import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'

export function createReduxStore (initialState?: StateSchema):
ReturnType< typeof configureStore<StateSchema>> {
  return configureStore<StateSchema>({
    reducer: {
      counter: CounterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
