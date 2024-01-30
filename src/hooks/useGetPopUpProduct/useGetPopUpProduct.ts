import { useState, useEffect } from "react";
import { axiosInstance } from "@src/utils/publicAxios";
import { TPopUpProducts } from "@src/@types/types";

export const useGetPopUpProducts = (inputVal: string) => {
  const [popUpProducts, setPopUpProducts] = useState<TPopUpProducts[]>([]);
  const fetchApPopUpProducts = async () => {
    try {
      if (inputVal !== "") {
        const fetch = await axiosInstance.get(
          `product?productName=${inputVal}`
        );
        setPopUpProducts(fetch.data.products);
      } else {
        setPopUpProducts([]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchApPopUpProducts();
  }, [inputVal]);
  console.log(popUpProducts);
  return { popUpProducts };
};
