import React, { SetStateAction, useEffect, useState } from "react";
import { axiosInstance } from "@src/utils/publicAxios";
import { useParams } from "react-router-dom";
import { TCategoryProducts } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import ProductsNotFoundImg from "@src/assets/images/no-items-found-img.png";
import SingleProductComp from "@src/components/UI /SingleProductComp";
import PaginationComp from "@src/components/Pagination";
import { Slider } from "antd";
import { FormattedMessage } from "react-intl";
import { FaDollarSign } from "react-icons/fa";
export const CategoryProducts = () => {
  const [products, setProducts] = useState<TCategoryProducts[]>([]);
  const { productCategoryId } = useParams();
  const [filterPrice, setFilterPrice] = useState<number[]>([20, 1000000]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productOnPage, setProductOnPage] = useState(3);
  const lastIndex = currentPage * productOnPage;
  const startIndex = lastIndex - productOnPage;
  const slicedOutData = products.slice(startIndex, lastIndex);

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true);
      const resp = await axiosInstance.get(
        `product?minPrice=${filterPrice[0]}&maxPrice=${filterPrice[1]}&categoryName=${productCategoryId}`
      );
      document.title = `Amazon |  ${productCategoryId}`;
      setProducts(resp.data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchCategoryProducts();
    }, 500);
    return () => clearTimeout(debounce);
  }, [productCategoryId, filterPrice]);

  const handleFilterPrice = (value: SetStateAction<number[]>) => {
    setFilterPrice(value);
  };

  console.log(filterPrice);
  return (
    <div className="flex flex-col bg-gray-200 w-full">
      <div className="flex justify-between items-center p-9 ">
        <div className="mr-[3rem] md:left flex justify-center items-center flex-col w-[10%]">
          <div className="mb-3 w-full">
            <h3 className="hidden md:block text-center mb-1">
              <FormattedMessage id="price-filter" />
            </h3>
            <p className="block text-center md:hidden">
              <FaDollarSign />
            </p>
            <div className="w-full p-0.5 rounded-md bg-[#febd69]"></div>
          </div>
          <hr />
          <div className=" hidden  md:flex mr-[50%] mt-3 ">
            <h3 className="underline ">MIN</h3>
            <h3 className="ml-[100%] underline">MAX</h3>
          </div>
          <Slider
            step={10}
            className="min-w-[80px] max-w-[100px]"
            min={20}
            max={3000}
            onChange={handleFilterPrice}
            range
            defaultValue={[20, 10000]}
          />
        </div>
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          slicedOutData.length === 0 && (
            <img src={ProductsNotFoundImg} className="w-[50%]" />
          )
        )}
        <div className="right flex justify-center flex-wrap">
          {slicedOutData.map((product) => {
            return <SingleProductComp key={product.id} data={product} />;
          })}
        </div>

        <div className="invisible right">
          <p className="text-[transparent]">Hello</p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-3">
        <PaginationComp
          total={products.length}
          currentPage={currentPage}
          productOnPage={productOnPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
