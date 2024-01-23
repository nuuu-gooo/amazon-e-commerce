import React, { useContext } from "react";
import {
  GlobalContext,
  useGlobalProvider,
} from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
export const Home = () => {
  const { userData } = useContext(AuthContext);
  const { existingCategories } = useContext(GlobalContext);
  return (
    <div className="">
      <p>{userData?.first_name}</p>
      <div className="m-auto max-w-[1300px] ">
        <ImgCarrousel />
        <div className="absolute grid grid-cols-4 items-center"></div>
      </div>
      <h1>Hello</h1>
    </div>
  );
};
