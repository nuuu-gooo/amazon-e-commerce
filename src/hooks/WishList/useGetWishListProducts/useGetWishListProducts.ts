import { axiosInstance } from "@src/utils/publicAxios";
import { useState, useEffect, useContext } from "react";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { AuthContext } from "@src/providers/Auth/AuthContext";
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

  console.log(wishListProducts);

  return { fetchWishListProducts, wishListProducts, wishListProductsLoading };
};
