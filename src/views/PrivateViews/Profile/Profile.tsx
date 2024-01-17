import { AuthContext } from "@src/providers/Auth/AuthContext";
import React from "react";
import { useContext } from "react";

export const Profile = () => {
  const { userData } = useContext(AuthContext);
  return <div>{userData?.first_name}</div>;
};
