import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { TProduct } from "@src/@types/types";

export const SingleProductComp = ({ data }: { data: TProduct }) => {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <Link className="no-underline text-black " to={`/search/${data.title}`}>
        <div className=" flex justify-center items-start flex-col border border-solid  max-w-[360px]  rounded-md p-9  ">
          <div className="flex justify-center items-center ">
            <img
              className="   w-full aspect-square flex items-center"
              src={data.image}
              alt=""
            />
          </div>

          <h2 className="mt-4 mb-1">{data.title}</h2>
          <p className=" text-red-700">{data.price}$</p>
          <button className="w-[100%] mt-5 rounded-b-lg  bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60">
            Buy
          </button>
        </div>
      </Link>
    </div>
  );
};
