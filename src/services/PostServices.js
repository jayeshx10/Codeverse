import axios from "axios";

export const getAllPosts = () => {
  return axios.get("/api/posts");
};

export const getPost = (postID) => {
  return axios.get(`/api/posts/${postID}`);
};

export const getAllUserPosts = (username) => {
  return axios.get("/api/posts/user/:username");
};

export const createPost = (postContent) => {
  return axios.post("/api/user/posts/", postContent);
};

export const editPost = (postID, postContent) => {
  return axios.post(`/api/posts/edit/${postID}`, postContent);
};

export const likePost = (postID) => {
  return axios.post(`/api/posts/like/${postID}`);
};

export const dislikePost = (postID) => {
  return axios.post(`/api/posts/dislike/${postID}`);
};

export const deletePost = (postID) => {
  return axios.delete(`/api/user/posts/${postID}`);
};
