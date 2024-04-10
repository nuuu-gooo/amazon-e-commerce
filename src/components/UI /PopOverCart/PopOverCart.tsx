import React, { useContext, useState } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { FormattedMessage } from "react-intl";
import { SinglePopOverCartProduct } from "./SinglePopOverCartProduct/SinglePopOverCartProduct";

export const PopOverCart = () => {
  const { allCartProducts, totalCartPrice } = useContext(GlobalContext);

  const { authStage } = useContext(AuthContext);
  useState<boolean>(false);
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
          return <SinglePopOverCartProduct product={product} />;
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
