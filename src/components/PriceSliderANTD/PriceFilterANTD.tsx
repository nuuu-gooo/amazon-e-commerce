import React from "react";
import { Input } from "antd";

export const PriceFilterANTD = ({ onChange }: any) => {
  return <Input type="number" onChange={onChange} placeholder="Enter Price" />;
};
