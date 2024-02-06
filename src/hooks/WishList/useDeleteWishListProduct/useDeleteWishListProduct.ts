import { privateAxios } from "@src/utils/privateAxios";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGetWishListProducts } from "../useGetWishListProducts/useGetWishListProducts";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export const useDeleteWishListProduct = () => {
  const { fetchWishListProducts } = useContext(GlobalContext);

  const deleteWishListProduct = async (id: string) => {
    try {
      await privateAxios.delete(`/liked-products/${id}`);
      fetchWishListProducts();
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    fetchWishListProducts();
  }, []);

  return { deleteWishListProduct };
};
