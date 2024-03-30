import React, { useState } from "react";
import { TCategoryProducts } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";

export const useGetProductsByCategory = (category: string) => {
  const [categoryProducts, setCategoryProducts] = useState<TCategoryProducts[]>(
    []
  );

  const fetchProducts = async () => {
    try {
      const fetchProductsByCategory = await axiosInstance.get(
        `product?categoryName=${category}`
      );
      setCategoryProducts(fetchProductsByCategory.data);
    } catch (error) {
    } finally {
    }
  };

  return { categoryProducts, fetchProducts };
};
