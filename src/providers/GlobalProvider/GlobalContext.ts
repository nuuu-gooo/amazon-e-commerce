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
  toggleSidebarFunction: () => void;
  fetchWishListProducts: () => Promise<void>;
}

export const GlobalContext = createContext<TGlobalContext>({
  deleteWishListProductLoading: false,
  wishListProductsLoading: false,
  wishListProducts: [],
  count: 0,
  isToggled: false,
  existingCatLoading: false,
  existingCategories: [],
  fetchWishListProducts: async () => {},
  setCount: () => {},
  setIsToggled: () => {},
  setExistingCategories: () => {},
  toggleSidebarFunction: () => {},
});
