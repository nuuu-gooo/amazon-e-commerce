import { axiosInstance } from "@src/utils/publicAxios";
import { useState, useEffect, useContext } from "react";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { privateAxios } from "@src/utils/privateAxios";

export const useGetWishListProducts = () => {
  const [wishListProducts, setWishListProducts] = useState([]);
  const { setAuthStage, authStage } = useContext(AuthContext);
  const fetchWishListProducts = async () => {
    try {
      const response = await privateAxios.get("/liked-products");
      setWishListProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchWishListProducts();
  }, []);

  console.log(wishListProducts);

  return { wishListProducts };
};
