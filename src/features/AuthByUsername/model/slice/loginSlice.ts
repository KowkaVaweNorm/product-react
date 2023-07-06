import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/LoginSchema'

export interface CounterState {
  value: number
}

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
