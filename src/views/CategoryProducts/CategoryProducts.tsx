import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState } from "react";
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
  return (
    <div>
      <h1>{productCategoryId}</h1>

      {products.map((product) => {
        return <h1>{product.title}</h1>;
      })}
    </div>
  );
};
