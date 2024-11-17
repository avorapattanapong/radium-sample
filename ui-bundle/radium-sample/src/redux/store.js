import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducer/users';
import uiReducer from './reducer/ui';

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      ui: uiReducer
    }
  })
}