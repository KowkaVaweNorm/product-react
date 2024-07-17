import { type LoginSchema } from "../../types/LoginSchema";

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};
const loadingState: LoginSchema = {
  username: '',
  password: '',
  isLoading: true
};
const filledState: LoginSchema = {
  username: 'user',
  password: '123',
  isLoading: false
};

export const testDataLoginSlice = {
  initialState,
  loadingState,
  filledState
};
