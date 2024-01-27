import React from "react";
import { useParams } from "react-router-dom";
export const CategoryProducts = () => {
  const { productCategoryId } = useParams();
  return (
    <div>
      <h1>{productCategoryId}</h1>
    </div>
  );
};
