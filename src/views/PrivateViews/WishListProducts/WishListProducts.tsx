import React, { useContext, useEffect, useState } from "react";
import { useDeleteWishListProduct } from "@src/hooks/WishList/useDeleteWishListProduct/useDeleteWishListProduct";
import { TLikedProduct } from "@src/@types/types";
import { Button } from "antd";

import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";

export const WishListProducts = () => {
  const { wishListProducts, wishListProductsLoading } =
    useContext(GlobalContext);
  const { deleteWishListProduct } = useDeleteWishListProduct();
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
              return (
                <div className="w-full border-solid border-black  flex bg-[white] justify-between items-center  p-4">
                  <div className="left flex items-center ">
                    <h3>{product.likedProduct.title}</h3>
                    <p className="ml-3 text-red-700">
                      <p>
                        {saleProducts.some(
                          (sProduct) => sProduct.id === product.likedProduct.id
                        ) ? (
                          <span className=" text-red-700">
                            {
                              saleProducts.find(
                                (sProduct) =>
                                  sProduct?.id === product.likedProduct.id
                              )?.salePrice
                            }
                            $
                          </span>
                        ) : (
                          <p className=" text-red-700">
                            {product.likedProduct.price}$
                          </p>
                        )}
                      </p>
                    </p>
                    <img
                      className="w-[10%] ml-5"
                      src={product.likedProduct.image}
                      alt=""
                    />
                  </div>

                  <Button
                    loading={wishListProductsLoading}
                    onClick={() => {
                      deleteWishListProduct(product.id);
                    }}
                    danger={true}
                  >
                    Delete
                  </Button>
                </div>
              );
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
