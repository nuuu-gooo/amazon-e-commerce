import { TProduct } from "@src/@types/types";
import { createContext } from "react";

export interface TExistingCategories {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
}
interface TGlobalContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  existingCategories: TExistingCategories[];
  setExistingCategories: React.Dispatch<
    React.SetStateAction<TExistingCategories[]>
  >;
  existingCatLoading: boolean;
  wishListProducts: TProduct[];
  deleteWishListProductLoading: boolean;
  wishListProductsLoading: boolean;
  AddToCart: (id: string) => Promise<void>;
  // cartProductsAdd: TProduct[];
  // cartProductsAddLoading: boolean;
  toggleSidebarFunction: () => void;
  fetchWishListProducts: () => Promise<void>;
  allCartProducts: TProduct[];
  // AddProductsToCart: (id: string) => Promise<void>;
}

export const GlobalContext = createContext<TGlobalContext>({
  // cartProductsAdd: [],
  // cartProductsAddLoading: false,

  allCartProducts: [],
  deleteWishListProductLoading: false,
  wishListProductsLoading: false,
  wishListProducts: [],
  count: 0,
  isToggled: false,
  existingCatLoading: false,
  existingCategories: [],
  // AddProductsToCart: async () => {},
  fetchWishListProducts: async () => {},
  AddToCart: async () => {},
  setCount: () => {},
  setIsToggled: () => {},
  setExistingCategories: () => {},
  toggleSidebarFunction: () => {},
});
