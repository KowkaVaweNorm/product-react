import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User } from 'entities/User'

interface LoginByUsernameProps {
  username: string
  password: string
}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const response = await axios.post('http://localhost:8000/login', authData)
    return response.data
  }
)
