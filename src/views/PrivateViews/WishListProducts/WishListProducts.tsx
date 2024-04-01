import React, { useContext, useEffect, useState } from "react";
import { TLikedProduct } from "@src/@types/types";

import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";
import { WishLIstProductsItem } from "./WishLIstProductsItem/WishLIstProductsItem";

export const WishListProducts = () => {
  const { wishListProducts } = useContext(GlobalContext);
  const { saleProducts } = useGetSaleProducts();
  let [totalWishListPrice, setTotalWishListPrice] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < wishListProducts.length; i++) {
      const salesProducts = saleProducts.find(
        (saleProduct) => saleProduct.id === wishListProducts[i].product_id
      );
      const salesPrice = salesProducts?.salePrice;
      if (salesPrice) {
        total += salesPrice;
      } else {
        total += wishListProducts[i].likedProduct.price;
      }
    }

    setTotalWishListPrice(total);
  }, [wishListProducts.length, saleProducts]);

  return (
    <div className="flex justify-center items-center flex-col h-full p-3">
      <div className="container  flex flex-col ">
        <h1 className="mb-3">
          <FormattedMessage id="wish-list" />
        </h1>
        <div className="w-full border-solid border-[#febd69] bg-[#febd69] p-4">
          {wishListProducts.length === 0 ? (
            <h3>
              <FormattedMessage id="currently-no-products-in-wishlist" />{" "}
            </h3>
          ) : (
            wishListProducts.map((product: TLikedProduct) => {
              return <WishLIstProductsItem data={product} />;
            })
          )}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-3">
        <p>
          Total:
          <span className="text-[red] text-2xl">${totalWishListPrice}</span>
        </p>
      </div>
    </div>
  );
};
