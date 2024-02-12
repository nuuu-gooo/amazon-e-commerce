import React from "react";
import { Input } from "antd";

export const PriceFilterANTD = ({ onChange }: any) => {
  return (
    <Input
      className="min-w-[100px] max-w-[200px]"
      type="number"
      onChange={onChange}
      placeholder="Enter Price"
    />
  );
};
