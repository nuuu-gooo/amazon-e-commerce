import React, { PropsWithChildren, useState } from "react";
import { AuthContext, UserDataType } from "./AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataType>();
  const [authData, setAuthData] = useState<string>();
  return <div>{children}</div>;
};
