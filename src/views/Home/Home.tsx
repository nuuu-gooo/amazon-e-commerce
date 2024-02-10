import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
import { Loader } from "@src/assets/Loader/Loader";
import { Link } from "react-router-dom";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";
import { SalesProductsComp } from "@src/components/UI /SalesProducts/SalesProductsComp";
import { SectionSlider } from "@src/components/UI /SectionSlider/SectionSlider";
import { useGetProductsUnder30 } from "@src/hooks/useGetProductsUnder30/useGetProductsUnder30";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories, existingCatLoading } = useContext(GlobalContext);
  const { saleProducts } = useGetSaleProducts();
  const { productsUnder30 } = useGetProductsUnder30();

  return (
    <div>
      <ImgCarrousel />
      <div className="m-auto w-full p-9 flex  flex-col    ">
        <div className=" hidden sm:hidden  md:grid  w-full p-[2rem]  absolute  gap-9  top-[30%] mt-[10%]  left-0 right-9 grid-cols-3">
          {existingCatLoading ? (
            <Loader />
          ) : (
            existingCategories.map((category) => {
              return (
                <Link
                  key={category.id}
                  className="no-underline text-[inherit] hover:opacity-70"
                  to={`productCategory/${category.name}`}
                >
                  <div
                    key={category.id}
                    className=" shadow-2xl bg-[white] rounded p-6 w-[100%]  "
                  >
                    <h2>{category.name}</h2>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <SalesProductsComp saleProducts={saleProducts} />
        <div className="mt-[5%]">
          <h1>Products under 30$</h1>
          <SectionSlider data={productsUnder30} />
        </div>
        <div className="mt-4">
          <SectionSlider data={productsUnder30} />
        </div>

        {/* {userData ? (
          <h1 className="mt-9" key={userData.first_name}>
            Welcome to Amazon <i>{userData.first_name}</i>{" "}
          </h1>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};
