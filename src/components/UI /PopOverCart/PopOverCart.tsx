import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { FormattedMessage } from "react-intl";

export const PopOverCart = () => {
  const { allCartProducts, totalCartPrice, deleteCartProducts } =
    useContext(GlobalContext);
  console.log(allCartProducts);
  const { authStage } = useContext(AuthContext);
  const { AddToCart, getCartProducts, deleteSingleCartProduct } =
    useContext(GlobalContext);

  const navigate = useNavigate();
  return (
    <div className="p-3 flex flex-col ">
      <h3 className="mb-3 ">
        <FormattedMessage id="your-basket" />
      </h3>
      {allCartProducts.length === 0 ? (
        <FormattedMessage id="empty-basket" />
      ) : (
        allCartProducts.map((product) => {
          return (
            <div className="flex justify-between p-2 items-center border border-solid rounded-t-lg ">
              <div className="left flex items-center ">
                <h3>{product.cartProduct.title}</h3>
                <img
                  className="w-[4%] ml-3"
                  src={product.cartProduct.image}
                  alt=""
                />
              </div>
              <div className="quantity flex items-center">
                <Button
                  onClick={() => {
                    AddToCart(product.cartProduct.id), getCartProducts();
                  }}
                >
                  +
                </Button>
                <p className="mr-3 ml-3">{product.count}</p>
                <Button onClick={() => deleteSingleCartProduct(product.id)}>
                  -
                </Button>
              </div>

              <Button
                onClick={() => deleteCartProducts(product.id)}
                danger={true}
              >
                <FormattedMessage id="delete" />
              </Button>
            </div>
          );
        })
      )}
      {authStage === authStage_EUNM.AUTHORIZED ? (
        <div className="flex justify-center items-center flex-col mt-3">
          <p>
            Total:
            <span className="text-[red] text-2xl">${totalCartPrice}</span>
          </p>
          {allCartProducts.length === 0 ? (
            ""
          ) : (
            <button
              onClick={() => navigate("/checkout")}
              className="mt-3 cursor-pointer px-2.5 rounded-md  font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              <FormattedMessage id="checkout" />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="mt-3 cursor-pointer px-2.5 rounded-md  font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
        >
          <FormattedMessage id="register" />
        </button>
      )}
    </div>
  );
};
