import React, { useEffect, useState } from "react";

import { Loader } from "@src/assets/Loader/Loader";
import { axiosInstance } from "@src/utils/publicAxios";
import { useParams } from "react-router-dom";
import { TProduct } from "@src/@types/types";
import { SingleProductItem } from "./SingleProductItem";
export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchedProductId } = useParams();

  const fetchSingleProduct = async () => {
    try {
      setLoading(true);
      const fetch = await axiosInstance.get(
        `product?productName=${searchedProductId}`
      );
      setSingleProduct(fetch.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [searchedProductId]);
  return (
    <div>
      {loading && <Loader />}
      {singleProduct?.map((product: TProduct) => {
        return <SingleProductItem data={product} />;
      })}
    </div>
  );
};
