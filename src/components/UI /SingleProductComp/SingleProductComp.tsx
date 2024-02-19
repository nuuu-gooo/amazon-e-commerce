import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TProduct } from "@src/@types/types";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";

export const SingleProductComp = ({ data }: { data: TProduct }) => {
  const { authStage } = useContext(AuthContext);
  const { AddToCart, addToCartLoading } = useContext(GlobalContext);
  const { saleProducts } = useGetSaleProducts();
  return (
    <div className="flex flex-wrap overflow-hidden">
      <div className=" flex justify-center items-start flex-col border border-solid  max-w-[360px]  rounded-md p-9  ">
        <Link className="no-underline text-black " to={`/search/${data.title}`}>
          <div className="flex justify-center items-center ">
            <img
              className="   w-full aspect-square flex items-center"
              src={data.image}
              alt=""
            />
          </div>
        </Link>

        <h2 className="mt-4 mb-1">{data.title}</h2>

        <p>
          {saleProducts.some((product) => product.id === data.id) ? (
            <span className=" text-red-700">
              {
                saleProducts.find((product) => product?.id === data?.id)
                  ?.salePrice
              }
              $
            </span>
          ) : (
            <p className=" text-red-700">{data.price}$</p>
          )}
        </p>

        {authStage === authStage_EUNM.AUTHORIZED && (
          <Button
            loading={addToCartLoading}
            onClick={() => AddToCart(data.id)}
            className="w-[100%] mt-5 rounded-b-lg  bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60"
          >
            Buy
          </Button>
        )}
      </div>
    </div>
  );
};
