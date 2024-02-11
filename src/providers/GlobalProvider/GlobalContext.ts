import { TCartItem, TProduct } from "@src/@types/types";
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
  allCartProducts: TCartItem[];
  addToCartLoading: boolean;
  setAddToCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  addToCartModal: boolean;
  AddToCart: (id: string) => Promise<void>;
  toggleSidebarFunction: () => void;
  fetchWishListProducts: () => Promise<void>;
  deleteCartProducts: (id: string) => Promise<void>;
}

export const GlobalContext = createContext<TGlobalContext>({
  wishListProducts: [],
  allCartProducts: [],
  existingCategories: [],
  count: 0,
  addToCartLoading: false,
  deleteWishListProductLoading: false,
  wishListProductsLoading: false,
  isToggled: false,
  existingCatLoading: false,
  addToCartModal: false,
  setAddToCartModal: () => {},
  deleteCartProducts: async () => {},
  fetchWishListProducts: async () => {},
  AddToCart: async () => {},
  setCount: () => {},
  setIsToggled: () => {},
  setExistingCategories: () => {},
  toggleSidebarFunction: () => {},
});
