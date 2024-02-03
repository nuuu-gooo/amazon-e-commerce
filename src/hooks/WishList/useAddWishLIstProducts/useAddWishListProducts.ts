import { axiosInstance } from "@src/utils/publicAxios";
import { useState, useEffect } from "react";

export const useAddWishListProducts = (id: string) => {
  const fetchAddDataWishList = async () => {
    await axiosInstance.post("/liked-products", { product_id: id });
  };

  useEffect(() => {
    console.log(fetchAddDataWishList());
  }, []);

  return { fetchAddDataWishList };
};
