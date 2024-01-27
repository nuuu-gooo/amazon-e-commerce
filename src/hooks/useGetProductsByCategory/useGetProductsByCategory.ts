import { axiosInstance } from "@src/utils/publicAxios";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const useGetProductsByCategory = (category: string) => {
  const [categoryProducts, setCategoryProducts] = useState<TCategoryProducts[]>(
    []
  );

  const fetchProducts = async () => {
    const fetchProductsByCategory = await axiosInstance.get(
      `product?categoryName=${category}`
    );
    setCategoryProducts(fetchProductsByCategory.data);
  };

  console.log(categoryProducts);
  return { categoryProducts, fetchProducts };
};
