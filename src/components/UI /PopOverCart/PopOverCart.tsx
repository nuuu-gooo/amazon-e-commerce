import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";

export const PopOverCart = () => {
  const { allCartProducts, totalCartPrice, deleteCartProducts } =
    useContext(GlobalContext);
  const { authStage } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="p-3 flex flex-col ">
      <h2 className="text-center mb-3">Your Basket</h2>
      {allCartProducts.length === 0 ? (
        <p>No Products in Cart</p>
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

              <Button
                onClick={() => deleteCartProducts(product.id)}
                danger={true}
              >
                Delete
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
              Checkout
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
          Register
        </button>
      )}
    </div>
  );
};
