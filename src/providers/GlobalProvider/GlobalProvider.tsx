import React, { PropsWithChildren, useEffect, useState } from "react";
import { GlobalContext, TExistingCategories } from "./GlobalContext";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGetWishListProducts } from "@src/hooks/WishList/useGetWishListProducts/useGetWishListProducts";
import { useDeleteWishListProduct } from "@src/hooks/WishList/useDeleteWishListProduct/useDeleteWishListProduct";
import { useAddToCart } from "@src/hooks/Cart/useAddToCart";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [existingCategories, setExistingCategories] = useState<
    TExistingCategories[]
  >([]);
  const [count, setCount] = useState<number>(0);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [existingCatLoading, setExistingCatLoading] = useState<boolean>(false);
  const { wishListProducts, fetchWishListProducts } = useGetWishListProducts();
  const { deleteWishListProductLoading } = useDeleteWishListProduct();
  const { wishListProductsLoading } = useGetWishListProducts();
  const {
    setCartProducts,
    cartProductsAdd,
    AddProductsToCart,
    cartProductsAddLoading,
  } = useAddToCart();

  const toggleSidebarFunction = () => {
    setIsToggled(!isToggled);
  };

  const fetchExistingCategories = async () => {
    try {
      setExistingCatLoading(true);
      const fetchExistingCategories = await axiosInstance.get(
        "/product-category"
      );
      setExistingCategories(fetchExistingCategories.data);
    } catch (error) {
    } finally {
      setExistingCatLoading(false);
    }
  };

  useEffect(() => {
    fetchExistingCategories();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cartProductsAddLoading,
        cartProductsAdd,
        AddProductsToCart,
        wishListProductsLoading,
        deleteWishListProductLoading,
        fetchWishListProducts,
        wishListProducts,
        count,
        setCount,
        isToggled,
        setIsToggled,
        toggleSidebarFunction,
        existingCategories,
        setExistingCategories,
        existingCatLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
