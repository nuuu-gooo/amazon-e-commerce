import React from "react";
import { useGetWishListProducts } from "@src/hooks/WishList/useGetWishListProducts/useGetWishListProducts";

export const WishListProducts = () => {
  const { wishListProducts } = useGetWishListProducts();

  return (
    <div>
      <h1>
        {wishListProducts.map((product) => {
          return <h1>{product.likedProduct.title}</h1>;
        })}
      </h1>
    </div>
  );
};
