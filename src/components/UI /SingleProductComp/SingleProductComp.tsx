import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TProduct } from "@src/@types/types";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";
import { FormattedMessage } from "react-intl";

export const SingleProductComp = ({ data }: { data: TProduct }) => {
  const { authStage } = useContext(AuthContext);
  const { AddToCart, getCartProducts } = useContext(GlobalContext);
  const { saleProducts } = useGetSaleProducts();
  const [loading, setLoading] = useState<boolean>(false);
  const handleOnClick = async (id: string) => {
    try {
      setLoading(true);
      await AddToCart(id);
      await getCartProducts();
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };
  const saleProduct = saleProducts.find((product) => product.id === data.id);
  return (
    <div className="flex flex-wrap overflow-hidden bg-[white] rounded-sm mr-3">
      <div className=" flex justify-center items-start flex-col  max-w-[360px]   rounded-e-md p-9  ">
        <Link
          className="no-underline text-black "
          to={`/search/singleItem/${data.title}`}
        >
          <div className="flex justify-center items-center ">
            <img
              className="   w-full aspect-square flex items-center"
              src={data.image}
              alt=""
            />
          </div>
        </Link>
        <h2 className="mt-4 mb-1">{data.title}</h2>

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
            onClick={() => handleOnClick(data.id)}
            loading={loading}
            className="w-[100%] mt-5 rounded-b-lg  bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60"
          >
            <FormattedMessage id="add-to-cart" />
          </Button>
        )}
      </div>
    </div>
  );
};
