import { AuthContext } from "@src/providers/Auth/AuthContext";
import React from "react";
import { useContext } from "react";

export const Profile = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile Page</h1>
      {userData?.first_name}
    </div>
  );
};
