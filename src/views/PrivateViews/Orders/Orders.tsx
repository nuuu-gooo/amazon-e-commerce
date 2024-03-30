import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { SingleOrder } from "./SingleOrder";
import { TBoughtProducts } from "@src/@types/types";

export const Orders = () => {
  const { boughtProducts } = useContext(GlobalContext);

  document.title = "Amazon | Orders";
  return (
    <div className="flex  bg-gray-200 justify-center items-center p-4 flex-col">
      {boughtProducts.length === 0 ? (
        <h1>Currently no orders!</h1>
      ) : (
        boughtProducts.map((bProduct: TBoughtProducts) => {
          return <SingleOrder data={bProduct} />;
        })
      )}
    </div>
  );
};
