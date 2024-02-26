import { TProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import { useEffect, useState } from "react";

export const useGetProductsUnder30 = () => {
  const [productsUnder30, setProductsUnder30] = useState<TProduct[]>([]);
  const fetchProductsUnder30 = async () => {
    const response = await axiosInstance.get("/product?categoryName=under-30");
    setProductsUnder30(response.data.products);
    console.log(response);
  };

  useEffect(() => {
    fetchProductsUnder30();
  }, []);

  return { productsUnder30 };
};
