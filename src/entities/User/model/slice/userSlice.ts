import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

export interface CounterState {
  value: number
}

const initialState: UserSchema = {
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  }
})

export const { actions: UserActions } = userSlice
export const { reducer: UserReducer } = userSlice
