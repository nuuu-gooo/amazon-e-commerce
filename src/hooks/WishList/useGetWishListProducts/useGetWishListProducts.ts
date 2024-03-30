import { useState } from "react";

import { privateAxios } from "@src/utils/privateAxios";

export const useGetWishListProducts = () => {
  const [wishListProducts, setWishListProducts] = useState([]);
  const [wishListProductsLoading, setWishListProductsLoading] =
    useState<boolean>(false);
  const fetchWishListProducts = async () => {
    try {
      setWishListProductsLoading(true);
      const response = await privateAxios.get("/liked-products");
      setWishListProducts(response.data);
    } catch (error) {
    } finally {
      setWishListProductsLoading(false);
    }
  };

  return { fetchWishListProducts, wishListProducts, wishListProductsLoading };
};
