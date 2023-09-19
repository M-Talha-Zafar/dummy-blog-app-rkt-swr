import axiosInstance from "../utilities/axios";

export const cacheKey = "/posts";

export const getPosts = async () => {
  const response = await axiosInstance.get(cacheKey);
  return response.data;
};

export const createPost = async (data) => {
  const response = await axiosInstance.post(cacheKey, data);
  return response.data;
};
