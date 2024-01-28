import { axiosInstance } from "@src/utils/publicAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetProductsBySeatch = (
  // searchedCategory: string,
  searchedProduct: string,
  category: string
) => {
  const [searchedProducts, setSearchedProducts] = useState<TSearchedProducts[]>(
    []
  );
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const fetch = await axiosInstance.get(
        `/product?productName=${searchedProduct}&categoryName=${category}`
      );
      setSearchedProducts(fetch.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchedProduct]);
  console.log(searchedProducts);

  return { fetchProducts, searchedProducts };
};
