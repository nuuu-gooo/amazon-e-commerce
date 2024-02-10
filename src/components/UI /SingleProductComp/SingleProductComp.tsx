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
          cover={<img className=" " alt="example" src={data.image} />}
        >
          <Meta title={data.title} description={data.description} />
          <p className="mt-[12%]">{data.price}$</p>
          <button className="w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60">
            Buy
          </button>
        </Card>
      </Link>
    </div>
  );
};
