import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
import { Loader } from "@src/assets/Loader/Loader";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories, existingCatLoading } = useContext(GlobalContext);

  return (
    <div>
      <ImgCarrousel />
      <div className=" hidden sm:hidden  md:grid  w-full place-items-center p-[2rem]  absolute items-center gap-9  grid-cols-3 overflow-hidden mt-[-25%]">
        {existingCatLoading ? (
          <Loader />
        ) : (
          existingCategories.map((category) => {
            return (
              <div className=" shadow-2xl bg-[white] rounded p-6 w-[100%] ">
                <h2>{category.name}</h2>
              </div>
            );
          })
        )}
      </div>
      <div className="m-auto w-[1500px] flex  flex-col    ">
        <p>{userData?.first_name}</p>
      </div>
    </div>
  );
};
