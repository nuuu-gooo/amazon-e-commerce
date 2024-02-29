import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";
import { SingleOrder } from "./SingleOrder";
import { TBoughtProduct } from "@src/@types/types";

export const Orders = () => {
  const { order, getBoughtProducts, boughtProducts } =
    useContext(GlobalContext);
  console.log(order?.id);
  useEffect(() => {
    getBoughtProducts(order?.id);
  }, []);
  document.title = "Amazon | Orders";
  return (
    <div className="flex  bg-gray-200 justify-center items-center p-4 flex-col">
      {boughtProducts.map((bProduct: TBoughtProduct) => {
        return <SingleOrder data={bProduct} />;
      })}
    </div>
  );
};
