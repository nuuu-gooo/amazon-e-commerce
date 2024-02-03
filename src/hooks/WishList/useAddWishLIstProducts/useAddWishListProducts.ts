import { axiosInstance } from "@src/utils/publicAxios";
import { useState, useEffect, useContext } from "react";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { privateAxios } from "@src/utils/privateAxios";

export function useAddWIshListProducts() {
  const [loading, setLoading] = useState(false);
  const { authData } = useContext(AuthContext);

  // const { getCartProducts } = useGlobalProvider();

  async function AddToWishList(productId: string) {
    try {
      setLoading(true);
      await privateAxios.post("/liked-products", {
        product_id: productId,
        authData,
      });
      // getCartProducts();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return { AddToWishList };
}
