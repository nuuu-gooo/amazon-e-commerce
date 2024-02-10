import { TSearchedProduct } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { useAddWIshListProducts } from "@src/hooks/WishList/useAddWishLIstProducts/useAddWishListProducts";
import { Button } from "antd";
import { FaGift } from "react-icons/fa";
import Pagination from "antd";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TSearchedProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchedProductId } = useParams();
  const { AddToWishList } = useAddWIshListProducts();

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
          <div className="md:flex p-9 justify-between items-center">
            <div className="left flex items-center flex-col mr-[1%]">
              <img
                className="mx-auto     w-full cursor-pointer "
                src={product.image}
                alt="product-img"
              />
            </div>
            <div className="middle flex flex-col items-start">
              <h1>{product.title}</h1>
              <hr className="border-solid border-black w-full mt-1 " />
              <div className="price flex items-center gap-3 pt-[20px] ">
                <p>Price:</p>
                <p className="text-2xl text-red-700">{product.price} $</p>
              </div>
              <div className="product-description flex flex-col items-start mt-3">
                <h4 className="mb-2">About this Item:</h4>
                <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>
              </div>
            </div>
            <div className="right inline-flex  ml-[3%]  flex-col items-start border-solid border-black  p-6 rounded-xl">
              <div className="price flex items-start">
                <p className="text-sm font-medium">$</p>
                <p className="text-3xl  font-medium">{product.price}</p>
              </div>
              <p className=" text-[#565959] ">
                No Import Fees Deposit & <br /> $16.78 Shipping to Greece
              </p>
              <p className="mt-3">
                Delivery{" "}
                <span className="font-medium">
                  Wednesday, February 28. <br />
                </span>{" "}
                Order within <span className="text-[green]">7 hrs 29 mins</span>
              </p>

              <button className="w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center border-none p-2 cursor-pointer hover:opacity-60">
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
