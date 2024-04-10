import React, { useState } from "react";
import { TLikedProduct } from "@src/@types/types";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";
import { Button } from "antd";
import { useDeleteWishListProduct } from "@src/hooks/WishList/useDeleteWishListProduct/useDeleteWishListProduct";

export const WishLIstProductsItem = ({ data }: { data: TLikedProduct }) => {
  const { saleProducts } = useGetSaleProducts();
  const { deleteWishListProduct } = useDeleteWishListProduct();
  const [wishListProductsLoading, setWishListProductsLoading] =
    useState<boolean>(false);
  const handleOnClick = async (id: string) => {
    setWishListProductsLoading(true);
    try {
      await deleteWishListProduct(id);
    } catch (error: any) {
    } finally {
      setWishListProductsLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full border-solid border-black  flex bg-[white] justify-between items-center  p-4">
        <div className="left flex items-center ">
          <h3>{data.likedProduct.title}</h3>
          <p className="ml-3 text-red-700">
            <p>
              {saleProducts.some(
                (sProduct) => sProduct.id === data.likedProduct.id
              ) ? (
                <span className=" text-red-700">
                  {
                    saleProducts.find(
                      (sProduct) => sProduct?.id === data.likedProduct.id
                    )?.salePrice
                  }
                  $
                </span>
              ) : (
                <p className=" text-red-700">{data.likedProduct.price}$</p>
              )}
            </p>
          </p>
          <img className="w-[10%] ml-5" src={data.likedProduct.image} alt="" />
        </div>

        <Button
          loading={wishListProductsLoading}
          onClick={() => handleOnClick(data.id)}
          danger={true}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
