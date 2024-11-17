import {USER_ACTION_TYPES} from "../actions/users";
import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    getUsers: state => {
      state.loading = true
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload.data;
      state.loading = false;
    },
    getUser: state => {
      state.loading = true
    },
    getUserSuccess: (state, action) => {
      state.users.push(action.payload)
      state.loading = false
    },
    getUserError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    createUser: state => {
      state.loading = true
    },
    createUserSuccess: (state, action) => {
      state.users.push(action.payload)
      state.loading = false
    },
    createUserError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    updateUser: state => {
      state.loading = true
    },
    updateUserSuccess: (state, action) => {
      state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
      state.loading = false
    },
    updateUserError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    deleteUser: state => {
      state.loading = true
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
      state.loading = false
    },
    deleteUserError: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  }
});

export const {getUsers, getUsersSuccess, getUser, getUserSuccess, getUserError, createUser, createUserSuccess, createUserError, updateUser, updateUserSuccess, updateUserError, deleteUser, deleteUserSuccess, deleteUserError} = usersSlice.actions;
export default usersSlice.reducer;
