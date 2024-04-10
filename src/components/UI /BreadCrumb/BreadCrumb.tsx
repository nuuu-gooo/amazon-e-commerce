import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const BreadCrumb = ({ data }: any) => {
  return (
    <div>
      <Breadcrumb
        className=" justify-center"
        items={[
          {
            title: (
              <Link to="/">
                <p>
                  <FormattedMessage id="home" />
                </p>
              </Link>
            ),
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
