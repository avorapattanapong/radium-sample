import {
  deleteUserById,
  fetchUser,
  fetchUsers,
  saveUser, updateSaveUser
} from "@/redux/api/users";
import {
  createUser,
  createUserError,
  createUserSuccess,
  deleteUser,
  deleteUserError,
  deleteUserSuccess,
  getUser,
  getUserError,
  getUsers,
  getUsersSuccess,
  getUserSuccess, updateUser, updateUserError, updateUserSuccess
} from "@/redux/reducer/users";

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

export const doGetUser = (id) => (dispatch) => {
  dispatch(getUser());

  return fetchUser(id)
    .then((response) => {
      dispatch(getUserSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(getUserError(error.message));
      return Promise.reject(error);
    });
}

export const doUpdateUser = ({ id, name, dateOfBirth }) => (dispatch) => {
  dispatch(updateUser());

  return updateSaveUser({ id, name, dateOfBirth })
    .then((response) => {
      dispatch(updateUserSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(updateUserError(error.message));
      return Promise.reject(error);
    });
}

export const doDeleteUser = (id) => (dispatch) => {
  dispatch(deleteUser());

  return deleteUserById(id)
    .then((response) => {
      dispatch(deleteUserSuccess(id));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(deleteUserError(error.message));
      return Promise.reject(error);
    });
}
