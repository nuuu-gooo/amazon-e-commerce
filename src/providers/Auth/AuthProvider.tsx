import React, { PropsWithChildren, useState } from "react";
import { AuthContext, UserDataType } from "./AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { axiosInstance } from "@src/utils/publicAxios";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataType>();
  const [authData, setAuthData] = useState<string>();
  const [authStage, setAuthStage] = useState<authStage_EUNM>(
    authStage_EUNM.UNAUTHORIZED
  );
  const [loading, setLoading] = useState<boolean>(false);

  const createAccFetch = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string
  ) => {
    try {
      setLoading(true);
      const postAcc = await axiosInstance.post("/auth/register", {
        first_name,
        last_name,
        email,
        password,
        phone_number,
      });
      setAuthData(postAcc.data);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log(authData);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        authData,
        setAuthData,
        authStage,
        setAuthStage,
        createAccFetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
