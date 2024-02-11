export interface TProduct {
  title: string;
  id: string;
  description: string;
  image: string;
  price: number;
  category_name: string;
}

export interface TCategoryProducts {
  title: string;
  id: string;
  description: string;
  image: string;
  price: number;
  category_name: string;
}

export interface TCartItem {
  id: string;
  user_id: string;
  cartProduct: TProduct;
}

export interface TLikedProduct {
  id: string;
  user_id: string;
  likedProduct: TProduct;
}

export interface TProductSale {
  title: string;
  id: string;
  description: string;
  image: string;
  price: number;
  category_name: string;
  salePrice: number;
}

export interface TPagination {
  currentPage: number;
  productOnPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}
