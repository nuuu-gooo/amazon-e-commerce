import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";

export const Orders = () => {
  const { order, getBoughtProducts, boughtProducts } =
    useContext(GlobalContext);
  console.log(order?.id);
  useEffect(() => {
    getBoughtProducts(order?.id);
  }, []);
  document.title = "Amazon | Orders";
  return (
    <div className="flex  bg-gray-300 justify-center items-center p-4">
      <div className=" flex items-center border border-rounded shadow-sm shadow-black p-3 bg-white">
        <h1>{order?.id}</h1>
        <Button className="ml-3" danger={true}>
          Refund
        </Button>
      </div>
    </div>
  );
};
