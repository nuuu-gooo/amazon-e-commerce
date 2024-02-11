import { axiosInstance } from "@src/utils/publicAxios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PriceFilterANTD from "@src/components/PriceSliderANTD";
import { TCategoryProducts } from "@src/@types/types";
import { Loader } from "@src/assets/Loader/Loader";
import ProductsNotFoundImg from "@src/assets/images/no-items-found-img.png";
import SingleProductComp from "@src/components/UI /SingleProductComp";
import PaginationComp from "@src/components/Pagination";
export const CategoryProducts = () => {
  const [products, setProducts] = useState<TCategoryProducts[]>([]);
  const { productCategoryId } = useParams();
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
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
        `product?minPrice=${minPrice}&maxPrice=${maxPrice}&categoryName=${productCategoryId}`
      );
      setProducts(resp.data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [productCategoryId, minPrice, maxPrice]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-9">
        <div className="mr-[3rem] md:left flex justify-center items-start flex-col">
          <div className="mb-3">
            <h3>Filters</h3>
            <hr className="border-solid border-black " />
          </div>
          <hr />
          <p>Min:</p>
          <PriceFilterANTD onChange={(e: any) => setMinPrice(e.target.value)} />
          <p className="mt-3">Max:</p>
          <PriceFilterANTD onChange={(e: any) => setMaxPrice(e.target.value)} />
        </div>
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          ""
        )}
        {slicedOutData.length === 0 && (
          <img src={ProductsNotFoundImg} className="w-[50%]" />
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
