import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

export const SingleProductComp = ({ data }: any) => {
  const { Meta } = Card;
  return (
    <div>
      <Link className="no-underline" to={`/search/${data.title}`}>
        <Card
          className=""
          hoverable
          style={{ width: 500 }}
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
