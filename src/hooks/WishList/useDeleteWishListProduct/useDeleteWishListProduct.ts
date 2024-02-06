import { privateAxios } from "@src/utils/privateAxios";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGetWishListProducts } from "../useGetWishListProducts/useGetWishListProducts";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export const useDeleteWishListProduct = () => {
  const { fetchWishListProducts } = useContext(GlobalContext);
  const [deleteWishListProductLoading, setDeleteWishListProductLoading] =
    useState<boolean>(false);

  const deleteWishListProduct = async (id: string) => {
    try {
      setDeleteWishListProductLoading(true);
      await privateAxios.delete(`/liked-products/${id}`);
      fetchWishListProducts();
    } catch (error) {
    } finally {
      setDeleteWishListProductLoading(false);
    }
  };

  useEffect(() => {
    fetchWishListProducts();
  }, []);

  return {
    deleteWishListProduct,
    deleteWishListProductLoading,
    setDeleteWishListProductLoading,
  };
};
