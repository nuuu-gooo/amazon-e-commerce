import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import ImgCarrousel from "@src/components/ImgCarrousel";
import { Loader } from "@src/assets/Loader/Loader";
import { Link } from "react-router-dom";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";
import SalesProductsComp from "@src/components/UI /SalesProducts";
import SectionSlider from "@src/components/UI /SectionSlider";
import { useGetProductsUnder30 } from "@src/hooks/useGetProductsUnder30/useGetProductsUnder30";
import { useGetCookingProducts } from "@src/hooks/useGetCookingProducts/useGetCookingProducts";
import { FormattedMessage } from "react-intl";
import { useGetBookProducts } from "@src/hooks/useGetBookProducts/useGetBookProducts";

export const Home = () => {
  document.title = "Amazon | Home ";
  const { existingCategories, existingCatLoading } = useContext(GlobalContext);
  const { saleProducts } = useGetSaleProducts();
  const { productsUnder30 } = useGetProductsUnder30();
  const { cookingProducts } = useGetCookingProducts();
  const { bookProducts } = useGetBookProducts();
  const slicedOutCategories = existingCategories.slice(0, 6);

  return (
    <div>
      <ImgCarrousel />
      <div className="m-auto w-full p-9 flex  flex-col    ">
        <div className=" hidden sm:hidden  md:grid  w-full p-[2rem]  absolute  gap-9  top-[1%] bottom-[30%]  mt-[10%]  left-0 right-9 grid-cols-3">
          {existingCatLoading ? (
            <Loader />
          ) : (
            slicedOutCategories.map((category) => {
              return (
                <Link
                  key={category.id}
                  className="no-underline text-[inherit] hover:scale-105 transition "
                  to={`productCategory/${category.name}`}
                >
                  <div
                    key={category.id}
                    className=" shadow-2xl bg-[white] rounded p-6 w-[100%]  "
                  >
                    <h3>{category.name}</h3>
                    <img
                      className="rounded-l mt-2 w-full"
                      src={category.image}
                      alt=""
                    />
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <SalesProductsComp saleProducts={saleProducts} />

        <div className="mt-[3%]">
          <h2 className="mb-2">
            <FormattedMessage id="products-under-30" />
          </h2>
          <SectionSlider data={productsUnder30} />
        </div>

        <div className="mt-[3%]">
          <h2 className="mb-2">
            <FormattedMessage id="cooking" />
          </h2>
          <SectionSlider data={cookingProducts} />
        </div>

        <div className="mt-[3%]">
          <h2 className="mb-2">
            <FormattedMessage id="books" />
          </h2>
          <SectionSlider data={bookProducts} />
        </div>
      </div>
    </div>
  );
};
