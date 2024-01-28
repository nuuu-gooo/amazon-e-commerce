import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Notification from "@src/components/NotificationANTD/Notification";
import { useParams } from "react-router-dom";
import { PricrSliderANTD } from "@src/components/PriceSliderANTD/PricrSliderANTD";
export const CategoryProducts = () => {
  const [products, setProducts] = useState<TCategoryProducts[]>([]);
  const { productCategoryId } = useParams();
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const fetchCategoryProducts = async () => {
    const resp = await axiosInstance.get(
      `product?minPrice=${minPrice}&maxPrice=${maxPrice}&categoryName=${productCategoryId}`
    );
    setProducts(resp.data.products);
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [productCategoryId, minPrice, maxPrice]);

  const { Meta } = Card;
  return (
    <div className="flex justify-between items-center p-9">
      <div className="left flex justify-center items-start flex-col">
        <p>Min:</p>
        <PricrSliderANTD onChange={(e: any) => setMinPrice(e.target.value)} />
        <p className="mt-3">Max:</p>
        <PricrSliderANTD onChange={(e: any) => setMaxPrice(e.target.value)} />
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
