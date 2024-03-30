import React, { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import ProductsNotFoundImg from "@src/assets/images/no-items-found-img.png";
import SingleProductComp from "@src/components/UI /SingleProductComp";
import { Slider } from "antd";
import { FaDollarSign } from "react-icons/fa";

export const SearchedProductsAndCategory = () => {
  const [searchedProducts, setSearchedProducts] = useState<TProduct[]>([]);
  const { productCategoryId, productId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [sliderPrice, setSliderPrice] = useState<number[]>([20, 10000]);

  const fetchSearchedProducts = async () => {
    try {
      setLoading(true);

      const fetch = await axiosInstance.get(
        `product?productName=${productId}&categoryName=${productCategoryId}&minPrice=${
          sliderPrice[0]
        }&maxPrice=${[sliderPrice[1]]}`
      );
      setSearchedProducts(fetch.data.products);
      document.title = ` Amazon | ${productId} | ${productCategoryId} `;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleSliderChange = (value: SetStateAction<number[]>) => {
    setSliderPrice(value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSearchedProducts();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [productCategoryId, productId, sliderPrice]);

  return (
    <div className="bg-gray-200 flex justify-between items-center p-9 ">
      <div className="left flex flex-col  md:flex items-center mr-[5%] w-[10%] ">
        <h3 className="hidden  md:block mb-1">Price Filter</h3>
        <p className="block mb-1 md:hidden">
          <FaDollarSign />
        </p>
        <div className="min-w-[80px] max-w-[100px]  md:w-full p-0.5 rounded-md bg-[#febd69]"></div>
        <div className=" hidden  md:flex mr-[50%] mt-3  ">
          <h3 className="underline ">MIN</h3>
          <h3 className="ml-[100%] underline">MAX</h3>
        </div>
        <Slider
          min={20}
          max={3000}
          range
          defaultValue={[20, 10000000]}
          onChange={handleSliderChange}
          className="min-w-[80px] max-w-[100px] md:w-full"
          step={10}
        />
      </div>
      <div className=" flex items-center flex-col sm:flex-row ">
        {loading ? (
          <Loader />
        ) : (
          searchedProducts.length === 0 && (
            <div className="w-full">
              <img
                className="w-[100%] overflow-hidden "
                src={ProductsNotFoundImg}
              />
            </div>
          )
        )}
        {searchedProducts.map((product) => {
          return <SingleProductComp data={product} />;
        })}
      </div>
      <div className="right invisible ">4</div>
    </div>
  );
};
