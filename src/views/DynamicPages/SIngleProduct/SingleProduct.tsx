import React, { useEffect, useState } from "react";

import { Loader } from "@src/assets/Loader/Loader";
import { axiosInstance } from "@src/utils/publicAxios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TProduct } from "@src/@types/types";
import { SingleProductItem } from "./SingleProductItem";
import { useGetProductsViewed } from "@src/hooks/useGetProductsViewed/useGetProductsViewed";
import SectionSlider from "@src/components/UI /SectionSlider";
import CategoryProducts from "../CategoryProducts";
import { BreadCrumb } from "@src/components/UI /BreadCrumb/BreadCrumb";
export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchedProductId } = useParams();
  const { productsViewed, fetchProductsViewed } = useGetProductsViewed();
  const navigate = useNavigate();

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
    if (searchedProductId) {
      fetchSingleProduct();
    }
  }, [searchedProductId]);

  useEffect(() => {
    if (singleProduct.length > 0) {
      const categoryId = singleProduct[0].category_name;
      fetchProductsViewed(categoryId);
    }
  }, [singleProduct]);

  return (
    <div>
      <div className="   bread-crumb flex justify-center items-center mt-4 flex-wrap">
        <BreadCrumb data={singleProduct} />
      </div>
      {loading && <Loader />}
      {singleProduct?.map((product: TProduct) => {
        return <SingleProductItem data={product} />;
      })}
      <div className="flex items-start justify-start flex-wrap    p-6  flex-col  ">
        <h3>Recommended Products</h3>
        <div className="flex gap-3 flex-wrap mt-2 ">
          {productsViewed.map((product: TProduct) => {
            return (
              <Link
                className="no-underline text-black"
                to={`/search/${product.title}`}
              >
                <div className="max-h-[300px] min-h-[300px] max-w-[300px]   flex items-center flex-col  border-solid p-3  rounded-sm">
                  <img
                    className=" max-w-[200px] aspect-square"
                    src={product.image}
                    alt=""
                  />
                  <h4 className="mt-3">{product.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
