import { TCategoryProducts } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const useGetProductsByCategory = (category: string) => {
  const [categoryProducts, setCategoryProducts] = useState<TCategoryProducts[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const fetchProductsByCategory = await axiosInstance.get(
        `product?categoryName=${category}`
      );
      setCategoryProducts(fetchProductsByCategory.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { categoryProducts, fetchProducts, loading };
};
