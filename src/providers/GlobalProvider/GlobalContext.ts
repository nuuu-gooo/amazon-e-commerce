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
  toggleSidebarFunction: () => void;
  wishListProducts: TProduct[];
  fetchWishListProducts: any;
}

export const GlobalContext = createContext<TGlobalContext>({
  fetchWishListProducts: () => {},
  wishListProducts: [],
  count: 0,
  isToggled: false,
  existingCatLoading: false,
  existingCategories: [],
  setCount: () => {},
  setIsToggled: () => {},
  setExistingCategories: () => {},
  toggleSidebarFunction: () => {},
});
