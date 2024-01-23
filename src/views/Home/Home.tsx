import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
import { Loader } from "@src/assets/Loader/Loader";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories, existingCatLoading } = useContext(GlobalContext);

  return (
    <div className="overflow-hidden">
      <ImgCarrousel />
      <div className="m-auto w-[1500px] flex justify-center  flex-col    ">
        <div className="grid grid-cols-1 w-full  items-center gap-9 py-9  md:grid-cols-3">
          {existingCatLoading ? (
            <Loader />
          ) : (
            existingCategories.map((category) => {
              return (
                <div className=" shadow-2xl bg-[white] rounded p-6 w-[100%] overflow-hidden">
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
