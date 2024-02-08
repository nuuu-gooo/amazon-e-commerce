import React from "react";
import cartEmptyImg from "@src/assets/SVG/cart-empty-img.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center p-7">
      <div className="cart-contianer flex  items-center bg-[#eeee] w-full p-3">
        <img className="w-[20%]" src={cartEmptyImg} alt="" />
        <div className="right ml-[10%] flex items-start flex-col">
          <h1>Your Amazon Cart is Empty</h1>
          <Link to={"/"} className="no-underline text-[black] hover:underline">
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
    </div>
  );
};
