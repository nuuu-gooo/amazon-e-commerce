import { TProduct } from "@src/@types/types";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";

interface TSingleProductItem {
  data: TProduct;
}
export const SingleProductItem = ({ data }: TSingleProductItem) => {
  const { AddToCart, addToCartLoading, setAddToCartModal, addToCartModal } =
    useContext(GlobalContext);
  const { authStage } = useContext(AuthContext);
  const navigate = useNavigate();
  const [salesBadge, setSalesBadge] = useState<boolean>(false);
  const { saleProducts } = useGetSaleProducts();

  useEffect(() => {
    if (saleProducts.find((product) => product.id === data.id)) {
      setSalesBadge(true);
    }
  }, [saleProducts, data]);
  return (
    <div>
      <div key={data.id} className="md:flex p-9 justify-between items-center">
        <div className="  md:flex items-center flex-col mr-[1%]">
          <img
            // className="mx-auto     w-full cursor-pointer "
            className="mx-auto  h-[400px] w-[400px] cursor-pointer"
            src={data.image}
            alt="data-img"
          />
        </div>
        <div className="middle flex flex-col items-start">
          <h1>{data.title}</h1>
          <hr className="border-solid border-black w-[100%] mt-1 " />
          <div className="price flex items-center gap-3 pt-[20px] ">
            <p className="text-2xl">
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
            </p>{" "}
          </div>
          <div className="data-description flex flex-col items-start mt-3">
            <h4 className="mb-2">About this Item:</h4>
            <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
          </div>
        </div>
        <div className="righ md:inline-flex  ml-[]  flex-col items-start border-solid border-black  p-6 rounded-xl">
          <div className="price flex items-start">
            <p className="text-sm font-medium">$</p>

            <p className="text-3xl mb-3">
              {saleProducts.some((product) => product.id === data.id) ? (
                <span className="">
                  {
                    saleProducts.find((product) => product?.id === data?.id)
                      ?.salePrice
                  }
                </span>
              ) : (
                <p className=" text-red-700">{data.price}$</p>
              )}
            </p>
          </div>
          <p className=" text-[#565959] ">
            No Import Fees Deposit & <br /> $16.78 Shipping to Greece
          </p>
          <p className="mt-3">
            Delivery{" "}
            <span className="font-medium">
              Wednesday, February 28. <br />
            </span>{" "}
            Order within <span className="text-[green]">7 hrs 29 mins</span>
          </p>

          {salesBadge ? (
            <p className="bg-[red] text-[white] p-2 mt-4 rounded-sm text-center w-full">
              For Sale
            </p>
          ) : (
            ""
          )}
          <button
            onClick={() => {
              if (authStage === authStage_EUNM.AUTHORIZED) {
                AddToCart(data.id);
              } else {
                navigate("/login");
              }
            }}
            className="w-[100%] mt-2 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60"
          >
            {addToCartLoading ? "Adding to Cart..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
