import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories } = useContext(GlobalContext);
  return (
    <div className="">
      <p>{userData?.first_name}</p>
      <div className="m-auto max-w-[1300px] flex justify-center items-center flex-col   ">
        <ImgCarrousel />
        <div className="grid grid-cols-1 w-full items-center gap-9 relative md:grid-cols-4">
          {existingCategories.map((category) => {
            return (
              <div className=" shadow-2xl bg-[white] rounded p-6 w-[100%]">
                <h2>{category.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
