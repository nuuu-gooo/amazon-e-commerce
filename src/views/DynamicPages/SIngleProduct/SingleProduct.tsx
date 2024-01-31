import { TSearchedProduct } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TSearchedProduct[]>([]);
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
      {loading ? <Loader /> : ""}
      {singleProduct?.map((product) => {
        return (
          <div>
            <h1>{product.title}</h1>
            <p>{product.price}$</p>
          </div>
        );
      })}
    </div>
  );
};
