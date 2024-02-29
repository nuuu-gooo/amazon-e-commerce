import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";

interface TBoughtProduct {
  created_at: string;
  updated_at: string;
  id: string;
}

export const Orders = () => {
  const { order, getBoughtProducts, boughtProducts, hadnleRefund } =
    useContext(GlobalContext);
  console.log(order?.id);
  useEffect(() => {
    getBoughtProducts(order?.id);
  }, []);
  document.title = "Amazon | Orders";
  return (
    <div className="flex  bg-gray-200 justify-center items-center p-4 flex-col">
      {boughtProducts.map((bProduct: TBoughtProduct) => {
        return (
          <div className="p-3 bg-white mb-3 rounded-sm shadow-sm shadow-black flex items-center">
            <h3>{bProduct.created_at}</h3>
            <Button
              onClick={() => hadnleRefund(bProduct.id)}
              className="ml-3"
              danger={true}
            >
              Refund
            </Button>
          </div>
        );
      })}
    </div>
  );
};
