import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PriceFilterANTD } from "@src/components/PriceSliderANTD/PriceFilterANTD";
import { axiosInstance } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import { Alert, Card } from "antd";
import ProductsNotFoundImg from "@src/assets/images/no-items-found-img.png";
import SingleProductComp from "@src/components/UI /SingleProductComp";

export const SearchedProducts = () => {
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);
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
      document.title = ` Amazon | ${productId} | ${productCategoryId} `;
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
      <div className="left flex flex-col md:flex items-start mr-[5%] ">
        <p>Min:</p>
        <PriceFilterANTD onChange={(e: any) => setMinPrice(e.target.value)} />
        <p className="mt-3">Max:</p>
        <PriceFilterANTD onChange={(e: any) => setMaxPrice(e.target.value)} />
      </div>
      <div className=" flex items-center flex-col sm:flex-row ">
        {loading ? <Loader /> : ""}
        {searchedProducts.length === 0 ? (
          <img className="w-full" src={ProductsNotFoundImg} />
        ) : (
          ""
        )}
        {searchedProducts.map((product) => {
          return <SingleProductComp data={product} />;
        })}
      </div>
      <div className="right invisible ">4</div>
    </div>
  );
};
