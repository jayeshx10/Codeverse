import axios from "axios";

export const login = (loginDetails) => {
  return axios.post("/api/auth/login", loginDetails);
};

export const signup = (signupDetails) => {
  return axios.post("/api/auth/signup", signupDetails);
};
