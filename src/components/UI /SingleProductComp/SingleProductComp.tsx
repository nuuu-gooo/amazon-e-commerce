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
  const {
    AddToCart,
    getCartProducts,
    addToCartLoading,
    deleteCartProducts,
    allCartProducts,
  } = useContext(GlobalContext);
  const { saleProducts } = useGetSaleProducts();
  const saleProduct = saleProducts.find((product) => product.id === data.id);
  return (
    <div className="flex flex-wrap overflow-hidden bg-white rounded-sm mr-3">
      <div className=" flex justify-center items-start flex-col  max-w-[360px]   rounded-e-md p-9  ">
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
        //!
        {/* <p>
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
        </p> */}
        <div className="  flex items-center">
          {saleProduct ? (
            <div className="flex mt-0.5">
              <p className="text-red-700 mr-2">{saleProduct.salePrice}$</p>{" "}
              <p className=" line-through  text-[gray]">{saleProduct.price}$</p>
            </div>
          ) : (
            <p className="mt-1">{data.price}$</p>
          )}
        </div>
        {authStage === authStage_EUNM.AUTHORIZED && (
          <Button
            onClick={async () => {
              AddToCart(data.id);
              getCartProducts();
            }}
            className="w-[100%] mt-5 rounded-b-lg  bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60"
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};
