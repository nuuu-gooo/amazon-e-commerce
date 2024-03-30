// import React, { useEffect, useState } from "react";

// import { Loader } from "@src/assets/Loader/Loader";
// import { axiosInstance } from "@src/utils/publicAxios";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { TProduct } from "@src/@types/types";
// import { SingleProductItem } from "./SingleProductItem";
// import { useGetProductsViewed } from "@src/hooks/useGetProductsViewed/useGetProductsViewed";
// import { BreadCrumb } from "@src/components/UI /BreadCrumb/BreadCrumb";
// import NoProductsFoundImg from "@src/assets/images/no-items-found-img.png";
// export const SingleProduct = () => {
//   const [singleProduct, setSingleProduct] = useState<TProduct[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const { searchedProductId } = useParams();
//   const { productsViewed, fetchProductsViewed, setProductsViewd } =
//     useGetProductsViewed();

//   useEffect(() => {
//     if (singleProduct.length === 0) {
//       setProductsViewd([]);
//     }
//   }, [singleProduct.length]);

//   document.title = `Amazon | ${searchedProductId}`;
//   const fetchSingleProduct = async () => {
//     try {
//       setLoading(true);
//       const fetch = await axiosInstance.get(
//         `product?productName=${searchedProductId}`
//       );
//       setSingleProduct(fetch.data.products);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     if (searchedProductId) {
//       fetchSingleProduct();
//     }
//   }, [searchedProductId]);

//   useEffect(() => {
//     if (singleProduct.length > 0) {
//       const categoryId = singleProduct[0].category_name;
//       fetchProductsViewed(categoryId);
//     }
//   }, [singleProduct]);

//   return (
//     <div>
//       <div className="bread-crumb flex justify-center items-center mt-4 flex-wrap">
//         {loading ? <Loader /> : <BreadCrumb data={singleProduct} />}
//       </div>
//       {singleProduct.length === 0 ? (
//         <div className="flex justify-center items-center">
//           <img className="w-[50%]" src={NoProductsFoundImg} alt="" />
//         </div>
//       ) : (
//         singleProduct.map((product: TProduct) => {
//           return <SingleProductItem data={product} />;
//         })
//       )}

//       <div className="flex items-start justify-start flex-wrap    p-6  flex-col  ">
//         <h2>Recommended Products</h2>
//         <div className="flex gap-3 flex-wrap mt-2 ">
//           {productsViewed.length === 0 ? (
//             <h3 className="text-[red]">No Recommended Products</h3>
//           ) : (
//             productsViewed.map((product: TProduct) => {
//               return (
//                 <Link
//                   className="no-underline text-black"
//                   to={`/search/${product.title}`}
//                 >
//                   <div className="max-h-[300px] min-h-[300px] max-w-[300px]   flex items-center flex-col  border-solid p-3  rounded-sm">
//                     <img
//                       className=" max-w-[200px] aspect-square"
//                       src={product.image}
//                       alt=""
//                     />
//                     <h4 className="mt-1">{product.title}</h4>
//                   </div>
//                 </Link>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

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
export const CurrentSearchedInputProducts = () => {
  const [products, setProducts] = useState<TCategoryProducts[]>([]);
  const { searchedProductId } = useParams();
  const [filterPrice, setFilterPrice] = useState<number[]>([20, 1000000]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productOnPage, setProductOnPage] = useState(3);
  const lastIndex = currentPage * productOnPage;
  const startIndex = lastIndex - productOnPage;
  const slicedOutData = products.slice(startIndex, lastIndex);

  const fetchCurrentSearchedProduct = async () => {
    try {
      setLoading(true);
      const resp = await axiosInstance.get(
        `product?minPrice=${filterPrice[0]}&maxPrice=${filterPrice[1]}&productName=${searchedProductId}`
      );
      document.title = `Amazon |  ${searchedProductId}`;
      setProducts(resp.data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchCurrentSearchedProduct();
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchedProductId, filterPrice]);

  const handleFilterPrice = (value: SetStateAction<number[]>) => {
    setFilterPrice(value);
  };

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
