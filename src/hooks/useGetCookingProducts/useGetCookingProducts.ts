import { TProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import { useEffect, useState } from "react";

export const useGetCookingProducts = () => {
  const [cookingProducts, setCookingProducts] = useState<TProduct[]>([]);
  const fetchCookingProducts = async () => {
    const resp = await axiosInstance.get("/product?categoryName=Cooking");
    setCookingProducts(resp.data.products);
  };

  useEffect(() => {
    fetchCookingProducts();
  }, []);

  return { cookingProducts };
};
