import React from "react";
// import TextField from "@mui/material/TextField";
import { Input } from "antd";

export const PricrSliderANTD = ({ onChange }: any) => {
  return (
    // <div>
    //   <TextField
    //     onChange={onChange}
    //     id="filled-number"
    //     label="Price Filter"
    //     type="number"
    //     InputLabelProps={{
    //       shrink: true,
    //     }}
    //     variant="filled"
    //   />
    // </div>
    <Input onChange={onChange} placeholder="Enter Price" />
  );
};
