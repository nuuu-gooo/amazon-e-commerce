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
import { useNavigate } from "react-router-dom";
import { orderStatus_ENUM } from "@src/ENUMS/Enums";

import { LContext, Locale_ENUM } from "../LProvider/LContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const naviagte = useNavigate();
  const [boughtProducts, setBoughtProducts] = useState<any>([]);
  const [delRefundLoading, setDelRefundLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<any>(undefined);
  console.log(order);
  const [transaction, setTransaction] = useState<boolean>();
  const { locale } = useContext(LContext);
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
  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false);
  const [globalCountry, setGlobalCountry] = useState<string>("");
  const [selectedNewCountry, setSelectedNewCountry] = useState<string>(
    locale === Locale_ENUM.DE ? "Germany" : "England"
  );
  const [orderStatus, setOrderStatus] = useState<orderStatus_ENUM>(
    orderStatus_ENUM.ORDERPENDING
  );
  console.log(orderStatus);
  //-----------PRICE-CALCULATION-------------//
  let sum = 0;
  let totalCartItems = 0;
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

    for (let i = 0; i < allCartProducts.length; i++) {
      totalCartItems += allCartProducts[i].count;
    }

    console.log(totalCartItems);
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
      getCartProducts();
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

  //------------------------------CART REQUESTS------------------------------------------//

  //------------------------------PURCHASE REQUESTS------------------------------------------//

  const buyRequest = async (sum: number, something: number) => {
    try {
      setPurchaseLoading(true);
      const response = await privateAxios.post("/purchases", {
        totalItems: totalCartItems,
        totalPrice: totalCartPrice,
      });
      {
        transaction && naviagte("/checkout/success");
      }

      {
        transaction && setOrderStatus(orderStatus_ENUM.ORDERED);
      }
      {
        if (location.pathname.includes("/checkout/success")) {
          setAllCartProducts([]);
          for (let i = 0; i < allCartProducts.length; i++) {
            deleteSingleCartProduct(allCartProducts[i].id);
            deleteCartProducts(allCartProducts[i].id);
          }
        }
      }

      console.log(response.data);
      setOrder(response.data);
      getBoughtProducts();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setPurchaseLoading(false);
    }
  };

  const getBoughtProducts = async () => {
    const resp = await privateAxios.get(`/purchases`);
    setBoughtProducts(resp.data);
    console.log(resp.data, boughtProducts);
  };

  const hadnleRefund = async (id: string) => {
    try {
      setDelRefundLoading(true);
      await axiosInstance.delete(`/purchases/${id}`);
      getBoughtProducts();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setDelRefundLoading(false);
    }
  };

  //------------------------------PURCHASE REQUESTS------------------------------------------//

  useEffect(() => {
    fetchExistingCategories();
    if (authStage === authStage_EUNM.AUTHORIZED) {
      getCartProducts();
      fetchWishListProducts();
    }
    setTransaction(false);
  }, [authStage, transaction, order, orderStatus]);

  return (
    <GlobalContext.Provider
      value={{
        selectedNewCountry,
        setSelectedNewCountry,
        order,
        globalCountry,
        setGlobalCountry,
        delRefundLoading,
        hadnleRefund,
        boughtProducts,
        getBoughtProducts,
        orderStatus,
        transaction,
        setTransaction,
        purchaseLoading,
        buyRequest,
        totalCartItems,
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
