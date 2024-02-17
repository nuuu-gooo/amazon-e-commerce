import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalContext, TExistingCategories } from "./GlobalContext";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGetWishListProducts } from "@src/hooks/WishList/useGetWishListProducts/useGetWishListProducts";
import { useDeleteWishListProduct } from "@src/hooks/WishList/useDeleteWishListProduct/useDeleteWishListProduct";
import { privateAxios } from "@src/utils/privateAxios";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { AuthContext } from "../Auth/AuthContext";
import { TCartItem } from "@src/@types/types";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [existingCategories, setExistingCategories] = useState<
    TExistingCategories[]
  >([]);
  const [count, setCount] = useState<number>(0);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [existingCatLoading, setExistingCatLoading] = useState<boolean>(false);
  const [allCartProducts, setAllCartProducts] = useState<TCartItem[]>([]);
  const { wishListProducts, fetchWishListProducts } = useGetWishListProducts();
  const { deleteWishListProductLoading } = useDeleteWishListProduct();
  const { wishListProductsLoading } = useGetWishListProducts();
  const { authStage } = useContext(AuthContext);
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);
  const [addToCartModal, setAddToCartModal] = useState<boolean>(false);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const [deleteCartLoading, setDeleteCartLoading] = useState<boolean>(false);
  const { saleProducts } = useGetSaleProducts();
  //-----------PRICE-CALCULATION-------------//
  let sum = 0;
  useEffect(() => {
    for (let i = 0; i < allCartProducts.length; i++) {
      const product = allCartProducts[i].cartProduct;
      const isProductOnSale = saleProducts.some(
        (saleProduct) => saleProduct.id === product.id
      );

      if (isProductOnSale) {
        //@ts-ignore
        sum += //@ts-ignore
          saleProducts.find((saleProduct) => saleProduct?.id === product?.id)
            .salePrice * allCartProducts[i]?.count;
      } else {
        sum += product.price * allCartProducts[i]?.count;
      }
    }

    setTotalCartPrice(sum);
  }, [
    allCartProducts.length,
    saleProducts,
    allCartProducts.map((product) => product.count),
  ]);

  //-----------PRICE-CALCULATION-------------//

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

  //------------------------------CART REQUESTS------------------------------------------//

  const AddToCart = async (id: string) => {
    try {
      setAddToCartLoading(true);
      const resp = await privateAxios.post("/cart", { product_id: id });
      console.log(resp.data, resp.status);
      await getCartProducts();
      if (resp.status === 201) {
        setAddToCartModal(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAddToCartLoading(false);
    }
  };

  const getCartProducts = async () => {
    const resp = await privateAxios.get("/cart");
    setAllCartProducts(resp.data);
    console.log(resp.data);
  };

  const deleteCartProducts = async (id: string) => {
    try {
      setDeleteCartLoading(true);
      await privateAxios.delete(`/cart/${id}?removeAll=true`);
      getCartProducts();
    } catch (error: any) {
      console.log(error);
    } finally {
      setDeleteCartLoading(false);
    }
  };

  const deleteSingleCartProduct = async (id: string) => {
    try {
      await privateAxios.delete(`/cart/${id}`);
      getCartProducts();
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchExistingCategories();
    if (authStage === authStage_EUNM.AUTHORIZED) {
      getCartProducts();
      fetchWishListProducts();
    }
  }, [authStage]);

  return (
    <GlobalContext.Provider
      value={{
        deleteSingleCartProduct,
        deleteCartLoading,
        getCartProducts,
        setDeleteCartLoading,
        totalCartPrice,
        setTotalCartPrice,
        addToCartModal,
        setAddToCartModal,
        addToCartLoading,
        deleteCartProducts,
        AddToCart,
        allCartProducts,
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
