import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, TokenTypes, UserDataType } from "./AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { axiosInstance } from "@src/utils/publicAxios";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataType>();
  const [authData, setAuthData] = useState<string>();
  const [authStage, setAuthStage] = useState<authStage_EUNM>(
    authStage_EUNM.UNAUTHORIZED
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // Create Acc fetch //
  const createAccFetch = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string
  ) => {
    try {
      const postAcc = await axiosInstance.post("/auth/register", {
        first_name,
        last_name,
        email,
        password,
        phone_number,
      });

      setAuthData(postAcc.data);
      if (authData !== null || undefined || "") {
        setSuccess(true);
      }
    } catch (error) {
    } finally {
    }
  };

  // Store deecode data //
  const storeUserData = (tokens: TokenTypes) => {
    console.log(tokens, "ილოგება დასაწყისში");
    const tokenData: UserDataType = jwtDecode(tokens.access_token);
    setUserData(tokenData);
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
    setAuthStage(authStage_EUNM.AUTHORIZED);
    console.log("ილოგება დასასრულში");
  };

  // Log Out Function //

  const loggout = () => {
    localStorage.removeItem("access_token"),
      localStorage.removeItem("refresh_token");
    setUserData(undefined);
    setAuthStage(authStage_EUNM.UNAUTHORIZED);
  };

  // Getting new Access Token //
  const getNewAccessToken = async (fetchedRefToken: string) => {
    const response = await axiosInstance.post<TokenTypes>(
      "/auth/update-tokens",
      {
        refresh_token: fetchedRefToken,
      }
    );
    storeUserData(response?.data);
  };

  // Sign In Acc fetch //

  const signInFetch = async (email: string, password: string) => {
    try {
      setLoading(true);
      const fetchSignIn = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      storeUserData(fetchSignIn?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  console.log(success);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");

    if (refreshToken) {
      getNewAccessToken(refreshToken);
    }
  }, []);

  console.log(authStage, userData);
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
        loading,
        setLoading,
        setSuccess,
        success,
        signInFetch,
        loggout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
