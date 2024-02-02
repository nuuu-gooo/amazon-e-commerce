import { TProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import { useState, useEffect } from "react";

export const useGetSaleProducts = () => {
  const [saleProducts, setSaleProducts] = useState<TProduct[]>([]);
  const fetchProducts = async () => {
    const response = await axiosInstance.get("product?onlySales=true");
    setSaleProducts(response.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { saleProducts };
};
