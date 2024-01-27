import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Notification from "@src/components/NotificationANTD/Notification";
import { useParams } from "react-router-dom";
export const CategoryProducts = () => {
  const [products, setProducts] = useState<TCategoryProducts[]>([]);
  const { productCategoryId } = useParams();
  const fetchCategoryProducts = async () => {
    const resp = await axiosInstance.get(
      `product?categoryName=${productCategoryId}`
    );
    setProducts(resp.data.products);
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [productCategoryId]);

  const { Meta } = Card;
  return (
    <div className="flex justify-between items-center p-9">
      <div className="left flex justify-center items-center">
        <p>Filters</p>
      </div>

      <div className="right grid grid-cols-1 gap-2 md:grid-cols-2">
        {products.length === 0 ? (
          <Notification />
        ) : (
          products.map((product) => {
            return (
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img className="w-[30%]" alt="example" src={product.image} />
                }
              >
                <Meta title={product.title} description={product.description} />
                <p className="mt-[12%]">{product.price}$</p>
              </Card>
            );
          })
        )}
      </div>
      <div className="right">
        <p className="text-[transparent]">Hello</p>
      </div>
    </div>
  );
};
