import { TProduct } from "@src/@types/types";
import { privateAxios } from "@src/utils/privateAxios";
import { useState, useEffect } from "react";
export const useAddToCart = () => {
  const [cartProductsAdd, setCartProducts] = useState<TProduct[]>([]);
  const [cartProductsAddLoading, setCartProductsAddLoading] =
    useState<boolean>(false);
  const AddProductsToCart = async (id: string) => {
    try {
      setCartProductsAddLoading(true);
      const response = await privateAxios.post("/cart", { product_id: id });
      setCartProducts(response.data);
    } catch (error: any) {
    } finally {
      setCartProductsAddLoading(false);
    }
  };

  return {
    setCartProducts,
    cartProductsAdd,
    AddProductsToCart,
    cartProductsAddLoading,
  };
};
