import { createSlice } from '@reduxjs/toolkit';
import { type CounterSchema } from '../types/CounterSchema';

export interface CounterState {
  value: number
}

const initialState: CounterSchema = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { actions: CounterActions } = counterSlice;
export const { reducer: CounterReducer } = counterSlice;
