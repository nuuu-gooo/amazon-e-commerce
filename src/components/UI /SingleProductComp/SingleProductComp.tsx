import React from "react";
import { Link } from "react-router-dom";
import { TProduct } from "@src/@types/types";

export const SingleProductComp = ({ data }: { data: TProduct }) => {
  return (
    <div className="flex flex-wrap">
      <Link className="no-underline text-black" to={`/search/${data.title}`}>
        <div className="flex justify-center items-start flex-col border border-solid  w-[100%] h-full rounded-md p-9">
          <div className="flex justify-center items-center">
            <img
              className=" w-[50%] aspect-square flex items-center"
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
