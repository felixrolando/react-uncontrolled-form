import axios from "axios";

export const createUser = async (data) => {
  const user = axios.post("http://localhost:3004/userRegistered", data);
  return user;
};
