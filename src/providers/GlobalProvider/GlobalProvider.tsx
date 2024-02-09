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
// import { useAddToCart } from "@src/hooks/Cart/useAddToCart";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [existingCategories, setExistingCategories] = useState<
    TExistingCategories[]
  >([]);
  const [count, setCount] = useState<number>(0);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [existingCatLoading, setExistingCatLoading] = useState<boolean>(false);
  const [allCartProducts, setAllCartProducts] = useState([]);
  const { wishListProducts, fetchWishListProducts } = useGetWishListProducts();
  const { deleteWishListProductLoading } = useDeleteWishListProduct();
  const { wishListProductsLoading } = useGetWishListProducts();
  const { authStage } = useContext(AuthContext);
  // const {
  //   setCartProducts,
  //   cartProductsAdd,
  //   AddProductsToCart,
  //   cartProductsAddLoading,
  // } = useAddToCart();

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
    const resp = await privateAxios.post("/cart", { product_id: id });
    console.log(resp.data);
    getCartProducts();
  };

  const getCartProducts = async () => {
    const resp = await privateAxios.get("/cart");
    setAllCartProducts(resp.data);
    console.log(resp.data);
    // getCartProducts();
  };

  useEffect(() => {
    fetchExistingCategories();
    if (authStage === authStage_EUNM.AUTHORIZED) {
      getCartProducts();
    }
  }, [authStage]);

  return (
    <GlobalContext.Provider
      value={{
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
