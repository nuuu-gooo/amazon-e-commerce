import { GlobalContext } from "@src/providers/GlobalProvider";
import React from "react";
import { useContext } from "react";

export const PopOverCart = () => {
  const { allCartProducts } = useContext(GlobalContext);
  return (
    <div className="p-3 flex flex-col ">
      {allCartProducts.map((product) => {
        return (
          <div className="flex justify-between p-2  border border-solid ">
            <h3>{product.cartProduct.title}</h3>
            <img className="w-[3%]" src={product.cartProduct.image} alt="" />
          </div>
        );
      })}
      <button className="mt-3 p-1">Chekout</button>
    </div>
  );
};
