import { privateAxios } from "@src/utils/privateAxios";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGetWishListProducts } from "../useGetWishListProducts/useGetWishListProducts";
import { useEffect } from "react";

export const useDeleteWishListProduct = () => {
  const { fetchWishListProducts } = useGetWishListProducts();

  const deleteWishListProduct = async (id: string) => {
    try {
      await privateAxios.delete(`/liked-products/${id}`);
    } catch (error) {
    } finally {
      fetchWishListProducts();
    }
  };

  useEffect(() => {
    fetchWishListProducts();
  }, []);

  return { deleteWishListProduct };
};
