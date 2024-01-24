import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
import { Loader } from "@src/assets/Loader/Loader";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories, existingCatLoading } = useContext(GlobalContext);

  return (
    <div className="">
      <ImgCarrousel />
      <div className="m-auto w-[1500px] flex  flex-col    ">
        <div className=" hidden sm:hidden  md:grid  w-full p-[2rem]  absolute  gap-9  top-[30%] mt-[10%] left-0 right-0 grid-cols-5">
          {existingCatLoading ? (
            <Loader />
          ) : (
            existingCategories.map((category) => {
              return (
                <div className=" shadow-2xl bg-[white] rounded p-6 w-[100%]  ">
                  <h2>{category.name}</h2>
                </div>
              );
            })
          )}
        </div>
        <p>{userData?.first_name}</p>
      </div>
    </div>
  );
};
