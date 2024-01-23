import React, { PropsWithChildren, useEffect, useState } from "react";
import { GlobalContext, TExistingCategories } from "./GlobalContext";
import { axiosInstance } from "@src/utils/publicAxios";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [existingCategories, setExistingCategories] = useState<
    TExistingCategories[]
  >([]);
  const [count, setCount] = useState<number>(0);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  // const [existingCategories, setExistingCateogries] = useState<
  //   TExistingCategories | undefined[]
  // >([]);

  const toggleSidebarFunction = () => {
    setIsToggled(!isToggled);
  };

  const fetchExistingCategories = async () => {
    const fetchExistingCategories = await axiosInstance.get(
      "/product-category"
    );
    setExistingCategories(fetchExistingCategories.data);
  };

  useEffect(() => {
    fetchExistingCategories();
  }, []);

  console.log(existingCategories);
  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        isToggled,
        setIsToggled,
        toggleSidebarFunction,
        existingCategories,
        setExistingCategories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
