import axios from "axios";

export const getAllUsers = () => {
  return axios.get("/api/users");
};

export const getUser = (userID) => {
  return axios.get(`/api/users/${userID}`);
};

export const editUser = (userData) => {
  return axios.get("/api/users/edit", userData);
};

export const getBookmarks = () => {
  return axios.get("/api/users/bookmark");
};

export const addBookmark = (postID) => {
  return axios.post(`api/users/bookmark/${postID}`);
};

export const removeBookmark = (postID) => {
  return axios.post(`/api/users/remove-bookmark/${postID}`);
};

export const followUser = (followUserID) => {
  return axios.post(`/api/users/follow/${followUserID}`);
};

export const unfollowUser = (unfollowUserID) => {
  return axios.post(`/api/users/unfollow/${unfollowUserID}`);
};
