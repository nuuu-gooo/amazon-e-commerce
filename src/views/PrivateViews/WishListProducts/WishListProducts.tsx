import React, { useEffect, useState } from "react";
import { useGetWishListProducts } from "@src/hooks/WishList/useGetWishListProducts/useGetWishListProducts";
import { useDeleteWishListProduct } from "@src/hooks/WishList/useDeleteWishListProduct/useDeleteWishListProduct";
import { TProduct } from "@src/@types/types";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Loader } from "@src/assets/Loader/Loader";

export const WishListProducts = () => {
  const { wishListProducts, wishListProductsLoading } =
    useGetWishListProducts();
  const { deleteWishListProduct } = useDeleteWishListProduct();
  let [totalWishListPrice, setTotalWishListPrice] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < wishListProducts.length; i++) {
      total += wishListProducts[i].likedProduct.price;
    }

    setTotalWishListPrice(total);
  }, [wishListProducts.length]);

  return (
    <div className="flex justify-center items-center flex-col h-full p-3">
      {wishListProductsLoading ? <Loader /> : ""}
      <div className="container  flex flex-col ">
        <h1 className="mb-3">Your WishList: 🎁</h1>
        <div className="w-full border-solid border-[#febd69] bg-[#febd69] p-4">
          {wishListProducts.map((product: TProduct) => {
            return (
              <Link
                className="no-underline text-black"
                to={`/search/${product.likedProduct.title}`}
              >
                <div className="w-full border-solid border-black  flex bg-[white] justify-between items-center  p-4">
                  <div className="left flex items-center ">
                    <h3>{product.likedProduct.title}</h3>
                    <p className="ml-3 text-red-700">
                      {Number(product.likedProduct.price)}$
                    </p>
                    <img
                      className="w-[10%] ml-5"
                      src={product.likedProduct.image}
                      alt=""
                    />
                  </div>

                  <Button
                    onClick={() => {
                      deleteWishListProduct(product.id);
                      window.location.reload();
                    }}
                    danger
                  >
                    Delete
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-3">
        <p>
          Total :{" "}
          <span className="text-[red] text-2xl">${totalWishListPrice}</span>{" "}
        </p>
      </div>
    </div>
  );
};
