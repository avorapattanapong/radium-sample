import axios from "axios";

const baseUrl = "http://localhost:8081/users";
export const saveUser = ({ name, dateOfBirth}) => {
  return axios.post(baseUrl, {
    name,
    dateOfBirth
  });
}

export const fetchUsers = () => {
  return axios.get(baseUrl);
}

export const fetchUser = (id) => {
  return axios.get(`${baseUrl}/${id}`);
}

export const updateSaveUser = ({ id, name, dateOfBirth }) => {
  return axios.put(baseUrl, {
    id,
    name,
    dateOfBirth
  });
}

export const deleteUserById = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}
