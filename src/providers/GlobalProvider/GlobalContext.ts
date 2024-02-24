import { TCartItem, TLikedProduct, TProduct } from "@src/@types/types";
import { createContext } from "react";

export interface TExistingCategories {
  name: string;
  id: string;
  created_at: string;
  updated_at: string;
  image: string;
}
interface TGlobalContext {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  existingCategories: TExistingCategories[];
  setExistingCategories: React.Dispatch<
    React.SetStateAction<TExistingCategories[]>
  >;
  isToggled: boolean;
  transaction: boolean | undefined;
  existingCatLoading: boolean;
  setTransaction: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  purchaseLoading: boolean;
  wishListProductsLoading: boolean;
  deleteWishListProductLoading: boolean;
  addToCartModal: boolean;
  deleteCartLoading: boolean;
  addToCartLoading: boolean;
  wishListProducts: TLikedProduct[];
  allCartProducts: TCartItem[];
  setAddToCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>;
  setDeleteCartLoading: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  totalCartPrice: number;
  totalCartItems: number;
  buyRequest: (totalItems: number, sum: number) => Promise<void>;
  deleteSingleCartProduct: (id: string) => Promise<void>;
  getCartProducts: () => Promise<void>;
  AddToCart: (id: string) => Promise<void>;
  deleteCartProducts: (id: string) => Promise<void>;
  toggleSidebarFunction: () => void;
  fetchWishListProducts: () => Promise<void>;
}

export const GlobalContext = createContext<TGlobalContext>({
  totalCartItems: 0,
  totalCartPrice: 0,
  count: 0,
  wishListProducts: [],
  allCartProducts: [],
  existingCategories: [],
  transaction: false,
  deleteCartLoading: false,
  purchaseLoading: false,
  addToCartLoading: false,
  deleteWishListProductLoading: false,
  wishListProductsLoading: false,
  isToggled: false,
  existingCatLoading: false,
  addToCartModal: false,
  AddToCart: async () => {},
  buyRequest: async () => {},
  deleteSingleCartProduct: async () => {},
  fetchWishListProducts: async () => {},
  deleteCartProducts: async () => {},
  getCartProducts: async () => {},
  setTransaction: () => {},
  setDeleteCartLoading: () => {},
  setTotalCartPrice: () => {},
  setAddToCartModal: () => {},
  setCount: () => {},
  setIsToggled: () => {},
  setExistingCategories: () => {},
  toggleSidebarFunction: () => {},
});
