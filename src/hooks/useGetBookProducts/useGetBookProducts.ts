import { TProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import { useEffect, useState } from "react";

export const useGetBookProducts = () => {
  const [bookProducts, setBookProducts] = useState<TProduct[]>([]);
  const fetchBookProducts = async () => {
    const response = await axiosInstance.get("/product?categoryName=წიგნები");
    setBookProducts(response.data.products);
    console.log(response);
  };

  useEffect(() => {
    fetchBookProducts();
  }, []);

  return { bookProducts };
};
