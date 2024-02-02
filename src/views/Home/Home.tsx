import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
import { Loader } from "@src/assets/Loader/Loader";
import { Link } from "react-router-dom";
import { LContext } from "@src/providers/LProvider/LContext";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts/useGetSalesProducts";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories, existingCatLoading } = useContext(GlobalContext);
  const { locale } = useContext(LContext);
  const { saleProducts } = useGetSaleProducts();

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
        {userData ? (
          <h1 key={userData.first_name}>
            Welcome to Amazon <i>{userData.first_name}</i>{" "}
          </h1>
        ) : (
          ""
        )}
        {saleProducts.length === 0 ? (
          <h1>No Sale Products avaliable</h1>
        ) : (
          saleProducts.map((saleProduct) => {
            return <h1>{saleProduct.title}</h1>;
          })
        )}
      </div>
    </div>
  );
};
