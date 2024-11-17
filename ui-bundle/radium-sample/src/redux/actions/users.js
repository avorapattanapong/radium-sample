import {fetchUsers, saveUser} from "@/redux/api/users";
import {
  createUser, createUserError,
  createUserSuccess,
  getUsers,
  getUsersSuccess
} from "@/redux/reducer/users";

export const USER_ACTION_TYPES = {
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',
  GET_USERS: 'GET_USERS',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_ERROR: 'UPDATE_USER_ERROR',
  DELETE_USER: 'DELETE_USER',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_ERROR: 'DELETE_USER_ERROR'
};

export const doCreateUser = ({ name, dateOfBirth }) => (dispatch) => {
  dispatch(createUser());

  return saveUser({ name, dateOfBirth })
    .then((response) => {
      dispatch(createUserSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      dispatch(createUserError(error.message));
      return Promise.reject(error);
    });
}

export const doGetUsers = () => (dispatch) => {
  dispatch(getUsers());

  return fetchUsers()
    .then((response) => {
      dispatch(getUsersSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export const getUser = () => ({
  type: USER_ACTION_TYPES.GET_USER
});

export const getUserSuccess = (user) => ({
  type: USER_ACTION_TYPES.GET_USER_SUCCESS,
  user
});

export const getUserError = (errorMsg) => ({
  type: USER_ACTION_TYPES.GET_USER_ERROR,
  errorMsg
});

export const doGetUser = (id) => (dispatch) => {
  dispatch(getUser);

  return getUser(id)
    .then((response) => {
      dispatch(getUserSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(getUserError(error.message));
      return Promise.reject(error);
    });
}

export const updateUser = () => ({
  type: USER_ACTION_TYPES.UPDATE_USER
});

export const updateUserSuccess = (user) => ({
  type: USER_ACTION_TYPES.UPDATE_USER_SUCCESS,
  user
});

export const updateUserError = (errorMsg) => ({
  type: USER_ACTION_TYPES.UPDATE_USER_ERROR,
  errorMsg
});

export const doUpdateUser = ({ id, name, dateOfBirth }) => (dispatch) => {
  dispatch(updateUser);

  return updateUser({ id, name, dateOfBirth })
    .then((response) => {
      dispatch(updateUserSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(updateUserError(error.message));
      return Promise.reject(error);
    });
}

export const deleteUser = () => ({
  type: USER_ACTION_TYPES.DELETE_USER
});

export const deleteUserSuccess = (id) => ({
  type: USER_ACTION_TYPES.DELETE_USER_SUCCESS,
  id
});

export const deleteUserError = (errorMsg) => ({
  type: USER_ACTION_TYPES.DELETE_USER_ERROR,
  errorMsg
});

export const doDeleteUser = (id) => (dispatch) => {
  dispatch(deleteUser);

  return deleteUser(id)
    .then((response) => {
      dispatch(deleteUserSuccess(id));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(deleteUserError(error.message));
      return Promise.reject(error);
    });
}
