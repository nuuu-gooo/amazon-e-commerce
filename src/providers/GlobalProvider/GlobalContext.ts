import {
  TBoughtProducts,
  TCartItem,
  TLikedProduct,
  TOrder,
} from "@src/@types/types";
import { orderStatus_ENUM } from "@src/ENUMS/Enums";
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
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  currentCategory: string;
  existingCategories: TExistingCategories[];
  isToggled: boolean;
  delRefundLoading: boolean;
  orderStatus: orderStatus_ENUM;
  transaction: boolean | undefined;
  existingCatLoading: boolean;
  setTransaction: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  purchaseLoading: boolean;
  wishListProductsLoading: boolean;
  deleteWishListProductLoading: boolean;
  addToCartModal: boolean;
  deleteCartLoading: boolean;
  addToCartLoading: boolean;
  setExistingCategories: React.Dispatch<
    React.SetStateAction<TExistingCategories[]>
  >;
  wishListProducts: TLikedProduct[];
  allCartProducts: TCartItem[];
  setAddToCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>;
  setDeleteCartLoading: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  totalCartPrice: number;
  totalCartItems: number;
  globalCountry: string;
  setGlobalCountry: React.Dispatch<React.SetStateAction<string>>;
  hadnleRefund: (id: string) => Promise<void>;
  getBoughtProducts: (id: string) => Promise<void>;
  buyRequest: (totalItems: number, sum: number) => Promise<void>;
  deleteSingleCartProduct: (id: string) => Promise<void>;
  getCartProducts: () => Promise<void>;
  AddToCart: (id: string) => Promise<void>;
  deleteCartProducts: (id: string) => Promise<void>;
  toggleSidebarFunction: () => void;
  fetchWishListProducts: () => Promise<void>;

  order: TOrder[];
  boughtProducts: TBoughtProducts[];
}

export const GlobalContext = createContext<TGlobalContext>({
  currentCategory: "Electronics",
  orderStatus: orderStatus_ENUM.ORDERPENDING,
  totalCartItems: 0,
  totalCartPrice: 0,
  count: 0,
  wishListProducts: [],
  allCartProducts: [],
  existingCategories: [],
  order: [],
  boughtProducts: [],
  transaction: false,
  deleteCartLoading: false,
  purchaseLoading: false,
  addToCartLoading: false,
  deleteWishListProductLoading: false,
  wishListProductsLoading: false,
  isToggled: false,
  existingCatLoading: false,
  addToCartModal: false,
  delRefundLoading: false,
  globalCountry: "",

  setCurrentCategory: () => {},

  setGlobalCountry: () => {},
  hadnleRefund: async () => {},
  getBoughtProducts: async () => {},
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
