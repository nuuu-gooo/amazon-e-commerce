import React, { useContext, useEffect, useState } from "react";
import { TProductSale } from "@src/@types/types";
import { Link } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { Button } from "antd";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useAddWIshListProducts } from "@src/hooks/WishList/useAddWishLIstProducts/useAddWishListProducts";
import { CiHeart } from "react-icons/ci";
import { FormattedMessage } from "react-intl";

interface TSingleSaleProduct {
  product: TProductSale;
}

export const SingleSaleProduct = ({ product }: TSingleSaleProduct) => {
  const { authStage } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const { AddToCart, fetchWishListProducts, wishListProducts } =
    useContext(GlobalContext);
  const { AddToWishList } = useAddWIshListProducts();
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
  const handleOnClick = async (id: string) => {
    try {
      setLoading(true);
      await AddToCart(id);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const likedProduct = wishListProducts.find(
      (wProduct) => wProduct.likedProduct.id === product.id
    );
    if (likedProduct) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishListProducts.length]);
  const handleWishListProducts = async (id: string) => {
    await AddToWishList(id);
    fetchWishListProducts();
  };

  return (
    <div
      key={product.id}
      className=" rounded-md  flex justify-center w-full border-solid border-black p-9 flex-col items-center h-full mt-[50%] "
    >
      <Link
        className="no-underline text-[black] flex items-center flex-col"
        to={`/search/${product.title}`}
      >
        <img className="w-[50%] aspect-square  " src={product.image} alt="" />
        <h3 className=" text-xs mt-3 sm:text-2xl">{product.title}</h3>
        <p className=" hidden sm:block text-l mt-3   text-red-500">
          {product.salePrice}$
          <span className="text-[gray] line-through">{product.price}$</span>
        </p>
        <p className=" text-xs mt-3 sm:text-xl text-red-500 sm:hidden">
          {product.salePrice}$
          <span className="text-[gray] line-through">{product.price}$</span>
        </p>
      </Link>
      {authStage === authStage_EUNM.AUTHORIZED ? (
        <div className="">
          <Button
            loading={loading}
            onClick={() => handleOnClick(product.id)}
            className="hidden sm:flex md:w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] items-center justify-center border-none p-2 cursor-pointer hover:opacity-60"
          >
            <p>
              <FormattedMessage id="add-to-cart" />
            </p>
          </Button>

          <button
            className="w-full bg-transparent border-none mt-3"
            disabled={isInWishlist}
            onClick={() => handleWishListProducts(product.id)}
          >
            {isInWishlist ? (
              <FaHeart className="text-[red] text-xl" />
            ) : (
              <CiHeart className="text-xl" />
            )}
          </button>

          <Button
            loading={loading}
            onClick={() => handleOnClick(product.id)}
            className=" flex sm:w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] items-center justify-center border-none p-2 sm:hidden "
          >
            <FaCartPlus />
          </Button>
        </div>
      ) : (
        ""
      )}

      {authStage === authStage_EUNM.AUTHORIZED && (
        <button
          onClick={() => {
            AddToWishList(product.id);
          }}
          className="mt-3 border-none bg-transparent"
        ></button>
      )}
    </div>
  );
};
