import React, { useContext, useState } from "react";
import { TBoughtProducts } from "@src/@types/types";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";

export const SingleOrder = ({ data }: { data: TBoughtProducts }) => {
  const { hadnleRefund, delRefundLoading } = useContext(GlobalContext);
  const [deleteRefundLoading, setDeleteRefundLoading] =
    useState<boolean>(false);

  const handleOnClick = async (id: string) => {
    try {
      setDeleteRefundLoading(true);
      await hadnleRefund(id);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setDeleteRefundLoading(false);
    }
  };

  return (
    <div>
      <div className="p-3 bg-white mb-3 rounded-sm shadow-sm shadow-black flex items-center">
        <h3>{data.created_at}</h3>
        <Button
          loading={deleteRefundLoading}
          onClick={() => handleOnClick(data.id)}
          className="ml-3"
          danger={true}
        >
          Refund
        </Button>
      </div>
    </div>
  );
};
