import React from "react";
import { Breadcrumb } from "antd";
import { TProduct } from "@src/@types/types";
import { Link } from "react-router-dom";

export const BreadCrumb = ({ data }: any) => {
  return (
    <div>
      <Breadcrumb
        className=" justify-center"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: (
              <Link to={`/productCategory/${data[0]?.category_name}`}>
                {data[0]?.category_name}
              </Link>
            ),
          },
          {
            title: `${data[0]?.title}`,
          },
        ]}
      />
    </div>
  );
};
