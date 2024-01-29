import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PricrSliderANTD } from "@src/components/PriceSliderANTD/PricrSliderANTD";
import { axiosInstance } from "@src/utils/publicAxios";
import { TSearchedProduct } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import { Alert, Card } from "antd";
import Notification from "@src/components/NotificationANTD/Notification";
export const SearchedProducts = () => {
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [searchedProducts, setSearchedProducts] = useState<TSearchedProduct[]>(
    []
  );
  const { productCategoryId, productId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const { Meta } = Card;
  const fetchSearchedProducts = async () => {
    try {
      setLoading(true);
      const fetch = await axiosInstance.get(
        `product?productName=${productId}&categoryName=${productCategoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setSearchedProducts(fetch.data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchedProducts();
  }, [productCategoryId, productId, minPrice, maxPrice]);

  return (
    <div className="flex justify-between items-center p-9">
      <div className="left flex flex-col md:flex items-center ">
        <p>Min:</p>
        <PricrSliderANTD onChange={(e: any) => setMinPrice(e.target.value)} />
        <p className="mt-3">Max:</p>
        <PricrSliderANTD onChange={(e: any) => setMaxPrice(e.target.value)} />
      </div>
      <div className="middle flex items-center">
        {loading ? <Loader /> : ""}
        {searchedProducts.length === 0 ? (
          <Alert message="No Products found" type="error" showIcon={true} />
        ) : (
          ""
        )}
        {searchedProducts.map((product) => {
          return (
            <Link className="no-underline" to={`/search/${product.title}`}>
              <Card
                className="gap-9"
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
      <div className="right">4</div>
    </div>
  );
};
