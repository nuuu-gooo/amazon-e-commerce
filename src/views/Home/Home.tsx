import React, { useContext } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import ImgCarrousel from "@src/components/ImgCarrousel/ImgCarrousel";
export const Home = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="">
      <h1>Hello</h1>
      <p>{userData?.first_name}</p>
      <div className="m-auto max-w-[1500px]">
        <ImgCarrousel />
      </div>
    </div>
  );
};
