import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type LoginSchema } from '../../types/LoginSchema'
const form = {
  username: '',
  password: '',
  isLoading: false,
  error: ''
}
export const getLoginState = (state: StateSchema): LoginSchema => state?.loginForm ?? form
