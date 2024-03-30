import { TProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import React, { useState, useEffect } from "react";

export const useGetProductsViewed = () => {
  const [productsViewed, setProductsViewd] = useState<TProduct[]>([]);

  const fetchProductsViewed = async (categoryId: string | undefined) => {
    const resp = await axiosInstance.get(`/product?categoryName=${categoryId}`);
    setProductsViewd(resp.data.products);
  };

  useEffect(() => {
    fetchProductsViewed(undefined);
  }, []);

  return { productsViewed, fetchProductsViewed, setProductsViewd };
};
