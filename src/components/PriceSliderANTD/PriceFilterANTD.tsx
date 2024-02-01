import React from "react";
// import TextField from "@mui/material/TextField";
import { Input } from "antd";

export const PriceFilterANTD = ({ onChange }: any) => {
  return <Input type="number" onChange={onChange} placeholder="Enter Price" />;
};
