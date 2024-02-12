import React, { useContext } from "react";
import { TCartItem } from "@src/@types/types";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";

interface TSingleCartItem {
  data: TCartItem;
}

export const SingleCartItem = ({ data }: TSingleCartItem) => {
  const { deleteCartProducts, deleteCartLoading } = useContext(GlobalContext);
  return (
    <div>
      <div className="flex items-center justify-between border-solid bg-[white] border p-3">
        <div className="left flex items-center">
          <h3>{data.cartProduct.title}</h3>
          <img className="w-[10%] ml-3" src={data.cartProduct.image} alt="" />
        </div>
        <Button
          loading={deleteCartLoading}
          onClick={() => deleteCartProducts(data.id)}
          danger={true}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
