import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, TokenTypes, UserDataType } from "./AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { axiosInstance } from "@src/utils/publicAxios";
import { jwtDecode } from "jwt-decode";
import { privateAxios, setPrivateAccessToken } from "@src/utils/privateAxios";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataType>();
  const [authData, setAuthData] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [authStage, setAuthStage] = useState<authStage_EUNM>(
    authStage_EUNM.PENDING
  );
  const navigate = useNavigate();

  // Sign In Acc fetch  ✅//
  const signInFetch = async (email: string, password: string) => {
    try {
      setLoading(true);

      const fetchSignIn = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      storeUserData(fetchSignIn?.data);
      navigate("/");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // Create Acc fetch  ✅//
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
        setError(false);
        setSuccess(true);
      }
      signInFetch(email, password);
    } catch (error) {
      setError(true);
    } finally {
    }
  };

  // Store deecode data ✅ //
  const storeUserData = (tokens: TokenTypes) => {
    const tokenData: UserDataType = jwtDecode(tokens.access_token);
    setUserData(tokenData);
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
    setPrivateAccessToken(tokens.access_token);
    setAuthStage(authStage_EUNM.AUTHORIZED);
  };

  // Log Out Function ✅ //
  const loggout = () => {
    localStorage.removeItem("access_token"),
      localStorage.removeItem("refresh_token");
    setUserData(undefined);
    setAuthStage(authStage_EUNM.UNAUTHORIZED);
    setPrivateAccessToken("");
  };

  // Getting new Access Token ✅ //
  const getNewAccessToken = async (fetchedRefToken: string) => {
    try {
      const response = await axiosInstance.post<TokenTypes>(
        "/auth/update-tokens",
        {
          refresh_token: fetchedRefToken,
        }
      );
      storeUserData(response?.data);
    } catch (error) {
      loggout();
    }
  };

  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");

    if (refreshToken) {
      getNewAccessToken(refreshToken);
    } else {
      setAuthStage(authStage_EUNM.UNAUTHORIZED);
    }
  }, []);

  //--USER INFO CHANGE--// ⛔️ 🚨

  const changeAccInfo = async (
    userPassword: string,
    userEmail: string,
    userName: string,
    userSurname: string,
    userNumber: string
  ) => {
    const response = await privateAxios.put("/user", {
      password: userPassword,
      email: userEmail,
      first_name: userName,
      last_name: userSurname,
      phone_number: userNumber,
    });

    console.log(response.data);
  };

  return (
    <AuthContext.Provider
      value={{
        error,
        changeAccInfo,
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
