import axios from "axios";

export default axios.create({
  baseURL: "https://dummyjson.com/",
});
const client = axios.create({
  baseURL: "https://dummyjson.com/",
});
export const getAllProducts = async () => {
  const { data } = await client.get(`/products`);
  return data;
};
export const getAllCategories = async () => {
  const { data } = await client.get(`/products/categories`);
  return data;
};
export const getProduct = async (id) => {
  const { data } = await client.get(`/products/${id}`);
  return data;
};
