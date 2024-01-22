import React, { useContext } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { AuthContext } from "@src/providers/Auth/AuthContext";

export const Home = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div>
      <h1>Hello</h1>
      <p>{userData?.first_name}</p>
    </div>
  );
};
