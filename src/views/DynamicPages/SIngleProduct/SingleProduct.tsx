import { TSearchedProduct } from "@src/@types/types";
import { axiosInstance } from "@src/utils/publicAxios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TSearchedProduct[]>([]);
  const { searchedProductId } = useParams();
  const fetchSingleProduct = async () => {
    const fetch = await axiosInstance.get(
      `product?productName=${searchedProductId}`
    );
    setSingleProduct(fetch.data.product);
  };
  return (
    <div>
      <h1>{searchedProductId}</h1>

      {singleProduct.map((product) => {
        return <h1>{product.title}</h1>;
      })}
    </div>
  );
};
