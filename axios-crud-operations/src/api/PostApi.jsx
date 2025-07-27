import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return api.get("/posts");
};

// delete method to delete from api data
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
