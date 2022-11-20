import { useQuery } from "react-query";
import {
  getAllProducts,
  getAllCategories,
} from "../common/api/prouductApi";

export const useProducts = () => {
  return useQuery("products", getAllProducts);
};
export const useCategories = () => {
  return useQuery("cats", getAllCategories);
};
