import { TBoughtProducts } from "@src/@types/types";
import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Button } from "antd";

export const SingleOrder = ({ data }: { data: TBoughtProducts }) => {
  const { hadnleRefund, delRefundLoading } = useContext(GlobalContext);
  return (
    <div>
      <div className="p-3 bg-white mb-3 rounded-sm shadow-sm shadow-black flex items-center">
        <h3>{data.created_at}</h3>
        <Button
          loading={delRefundLoading}
          onClick={() => hadnleRefund(data.id)}
          className="ml-3"
          danger={true}
        >
          Refund
        </Button>
      </div>
    </div>
  );
};
