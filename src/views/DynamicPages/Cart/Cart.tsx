import React, { useContext, useEffect, useState } from "react";
import cartEmptyImg from "@src/assets/SVG/cart-empty-img.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { Button } from "antd";
export const Cart = () => {
  const navigate = useNavigate();
  const { allCartProducts, deleteCartProducts } = useContext(GlobalContext);
  const { authStage } = useContext(AuthContext);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < allCartProducts.length; i++) {
      total += allCartProducts[i].cartProduct.price;
    }
    setTotalCartPrice(total);
  }, [allCartProducts.length]);

  console.log(allCartProducts);
  return (
    <div className="flex justify-center items-center p-7">
      {allCartProducts.length === 0 ? (
        <div className="cart-contianer flex  items-center bg-[#eeee] w-full p-3">
          <img className="w-[20%]" src={cartEmptyImg} alt="" />
          <div className="right ml-[10%] flex items-start flex-col">
            <h1>Your Amazon Cart is Empty</h1>
            <Link
              to={"/"}
              className="no-underline text-[black] hover:underline"
            >
              Go to Home Page
            </Link>
            <div className="btns flex items-center justify-center mt-3">
              <button
                className="rounded    bg-[#febd69]   p-3 border-none hover:opacity-50 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in to your account
              </button>
              <button
                className=" rounded  bg-[#febd69] ml-3  p-3 border-none hover:opacity-50 cursor-pointer "
                onClick={() => navigate("/createaccount")}
              >
                Sing Up now!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="mb-2">Your Cart </h1>
          <div className="border border-solid  border-[#febd69] bg-[#febd69]  p-5 rounded-l">
            {allCartProducts.map((product) => {
              return (
                <div className="flex items-center justify-between border-solid bg-[white] border p-3">
                  <div className="left flex items-center">
                    <h3>{product.cartProduct.title}</h3>
                    <img
                      className="w-[10%] ml-3"
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
