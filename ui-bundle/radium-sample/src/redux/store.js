import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducer/users';

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer
    }
  })
}