import React, { useContext } from "react";
import cartEmptyImg from "@src/assets/SVG/cart-empty-img.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { SingleCartItem } from "./SingleCartItem";
import { FormattedMessage } from "react-intl";

export const Cart = () => {
  const navigate = useNavigate();
  const { allCartProducts, totalCartPrice } = useContext(GlobalContext);
  const { authStage } = useContext(AuthContext);

  document.title = "Amazon | Your Cart";
  return (
    <div className="flex justify-center items-center p-7">
      {allCartProducts.length === 0 ? (
        <div className="cart-contianer flex  items-center bg-[#eeee] w-full p-3">
          <img className="w-[20%]" src={cartEmptyImg} alt="" />

          <div className="right ml-[10%] flex items-start flex-col">
            <h1>
              <FormattedMessage id="amazon-cart-empty" />
            </h1>
            <Link
              to={"/"}
              className="no-underline text-[black] hover:underline mt-1"
            >
              <FormattedMessage id="back-to-home" />
            </Link>
            {authStage === authStage_EUNM.UNAUTHORIZED && (
              <div className="btns flex items-center justify-center mt-3">
                <button
                  className="rounded    bg-[#febd69]   p-3 border-none hover:opacity-50 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  <FormattedMessage id="sign-in-cart" />
                </button>
                <button
                  className=" rounded  bg-[#febd69] ml-3  p-3 border-none hover:opacity-50 cursor-pointer "
                  onClick={() => navigate("/createaccount")}
                >
                  <FormattedMessage id="sign-up-cart" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="mb-2">Your Cart </h1>
          <div className="border border-solid  border-[#febd69] bg-[#febd69]  p-5 rounded-l">
            {allCartProducts.map((product) => {
              return <SingleCartItem data={product} />;
            })}
          </div>
          <div className="flex justify-center items-center flex-col mt-3">
            <p>
              Total:
              <span className="text-[red] text-2xl">${totalCartPrice}</span>
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-3 cursor-pointer px-2.5 rounded-md  font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
