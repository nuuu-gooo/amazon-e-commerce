import { useState, useEffect } from "react";
import { axiosInstance } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/types";

export const useGetPopUpProducts = (inputVal: string) => {
  const [popUpProducts, setPopUpProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchApPopUpProducts = async () => {
    try {
      setLoading(true);
      if (inputVal !== "") {
        const fetch = await axiosInstance.get(
          `product?productName=${inputVal}`
        );
        setPopUpProducts(fetch.data.products);
      } else {
        setPopUpProducts([]);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApPopUpProducts();
  }, [inputVal]);

  return { popUpProducts, loading, setPopUpProducts };
};
