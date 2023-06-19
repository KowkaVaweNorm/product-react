import { type StateSchema } from 'app/providers/StoreProvider'
import { CounterReducer, CounterActions } from './counterSlice'
import { type CounterSchema } from '../types/CounterSchema'

describe('counterSliceTest', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(CounterReducer(state, CounterActions.decrement))
      .toEqual({ value: 9 })
  })
  test('increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(CounterReducer(state, CounterActions.increment))
      .toEqual({ value: 11 })
  })
  test('should work with empty state', () => {
    expect(CounterReducer(undefined, CounterActions.increment))
      .toEqual({ value: 1 })
  })
})
