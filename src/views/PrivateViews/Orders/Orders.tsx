import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

import { FaTrash } from "react-icons/fa";
import { Button } from "antd";

export const Orders = () => {
  const { order, getBoughtProducts, boughtProducts } =
    useContext(GlobalContext);
  console.log(order?.id);
  useEffect(() => {
    const fetchBoughtProducts = async () => {
      if (order?.id) {
        await getBoughtProducts(order.id);
      }
    };

    if (order) {
      fetchBoughtProducts();
    }
  }, [order]);
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
