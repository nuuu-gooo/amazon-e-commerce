import { TProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import { useEffect, useState } from "react";

export const useGetBookProducts = () => {
  const [bookProducts, setBookProducts] = useState<TProduct[]>([]);
  const fetchBookProducts = async () => {
    const resp = await axiosInstance.get("/product?categoryName=books");
    setBookProducts(resp.data.products);
  };

  useEffect(() => {
    fetchBookProducts();
  }, []);

  return { bookProducts };
};
