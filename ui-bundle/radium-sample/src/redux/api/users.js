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

export const getUser = (id) => {
  return axios.get(`${baseUrl}/${id}`);
}

export const updateUser = ({ id, name, dateOfBirth }) => {
  return axios.put(baseUrl, {
    id,
    name,
    dateOfBirth
  });
}

export const deleteUser = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}
