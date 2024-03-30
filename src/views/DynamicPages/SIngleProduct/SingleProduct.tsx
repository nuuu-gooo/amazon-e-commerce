import React, { useEffect, useState } from "react";

import { Loader } from "@src/assets/Loader/Loader";
import { axiosInstance } from "@src/utils/publicAxios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TProduct } from "@src/@types/types";
import { SingleProductItem } from "./SingleProductItem";
import { useGetProductsViewed } from "@src/hooks/useGetProductsViewed/useGetProductsViewed";
import { BreadCrumb } from "@src/components/UI /BreadCrumb/BreadCrumb";
import NoProductsFoundImg from "@src/assets/images/no-items-found-img.png";
export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchedProductId } = useParams();
  const { productsViewed, fetchProductsViewed, setProductsViewd } =
    useGetProductsViewed();

  useEffect(() => {
    if (singleProduct.length === 0) {
      setProductsViewd([]);
    }
  }, [singleProduct.length]);

  document.title = `Amazon | ${searchedProductId}`;
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
      <div className="bread-crumb flex justify-center items-center mt-4 flex-wrap">
        {loading ? <Loader /> : <BreadCrumb data={singleProduct} />}
      </div>
      {singleProduct.length === 0 ? (
        <div className="flex justify-center items-center">
          <img className="w-[50%]" src={NoProductsFoundImg} alt="" />
        </div>
      ) : (
        singleProduct.map((product: TProduct) => {
          return <SingleProductItem data={product} />;
        })
      )}

      <div className="flex items-start justify-start flex-wrap    p-6  flex-col  ">
        <h2>Recommended Products</h2>
        <div className="flex gap-3 flex-wrap mt-2 ">
          {productsViewed.length === 0 ? (
            <h3 className="text-[red]">No Recommended Products</h3>
          ) : (
            productsViewed.map((product: TProduct) => {
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
                    <h4 className="mt-1">{product.title}</h4>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
