import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { TProduct } from "@src/@types/types";

export const SingleProductComp = ({ data }: { data: TProduct }) => {
  const { Meta } = Card;
  return (
    <div>
      <Link className="no-underline" to={`/search/${data.title}`}>
        <Card
          className=""
          hoverable
          style={{ width: 300 }}
          cover={<img className="" alt="example" src={data.image} />}
        >
          <Meta title={data.title} description={data.description} />
          <p className="mt-[12%]">{data.price}$</p>
          <button className="mt-3 p-2 w-full">Buy</button>
        </Card>
      </Link>
    </div>
  );
};
