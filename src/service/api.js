import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${url}/addUser`, data);
  } catch (error) {
    console.log("error while calling post api", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${url}/allUsers`);
  } catch (error) {
    console.log("error while calling get api", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${url}/editUsers/${id}`);
  } catch (error) {
    console.log("error while calling getuser", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${url}/editUsers/${id}`, user);
  } catch (error) {
    console.log("error while handling editUser", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log("error while calling deleteUser", error);
  }
};
