import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Notification from "@src/components/NotificationANTD/Notification";
import { Link, useParams } from "react-router-dom";
import { PricrSliderANTD } from "@src/components/PriceSliderANTD/PricrSliderANTD";
import { TCategoryProducts } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import ProductsNotFoundImg from "@src/assets/images/no-items-found-img.png";
export const CategoryProducts = () => {
  const [products, setProducts] = useState<TCategoryProducts[]>([]);
  const { productCategoryId } = useParams();
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [loading, setLoading] = useState(false);

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true);
      const resp = await axiosInstance.get(
        `product?minPrice=${minPrice}&maxPrice=${maxPrice}&categoryName=${productCategoryId}`
      );
      setProducts(resp.data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [productCategoryId, minPrice, maxPrice]);

  const { Meta } = Card;

  return (
    <div className="flex justify-between items-center p-9">
      <div className="mr-[3rem] md:left flex justify-center items-start flex-col">
        <div className="mb-3">
          <h3>Filters</h3>
          <hr className="border-solid border-black " />
        </div>
        <hr />
        <p>Min:</p>
        <PricrSliderANTD onChange={(e: any) => setMinPrice(e.target.value)} />
        <p className="mt-3">Max:</p>
        <PricrSliderANTD onChange={(e: any) => setMaxPrice(e.target.value)} />
      </div>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        ""
      )}
      {products.length === 0 ? (
        <img className="w-[50%]" src={ProductsNotFoundImg} />
      ) : (
        ""
      )}
      <div className="right overflow-hidden place-items-center grid grid-cols-1 gap-2 md:grid-cols-2">
        {products.map((product) => {
          return (
            <Link className="no-underline" to={`/search/${product.title}`}>
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
            </Link>
          );
        })}
      </div>
      <div className="right">
        <p className="text-[transparent]">Hello</p>
      </div>
    </div>
  );
};
