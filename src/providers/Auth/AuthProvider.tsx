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
  const [numberInputValidation, setNumberInputValidation] = useState<
    boolean | undefined
  >(undefined);
  const [authStage, setAuthStage] = useState<authStage_EUNM>(
    authStage_EUNM.PENDING
  );
  const [changeAccLoading, setChangeAccLoading] = useState<boolean>(false);
  const [changedAccInfo, setChangedAccInfo] = useState<boolean | undefined>(
    undefined
  );
  const [createAccLoading, setCreateAccLoading] = useState<boolean | undefined>(
    undefined
  );
  const navigate = useNavigate();
  console.log(changedAccInfo);
  //--USER INFO CHANGE--// ✅
  const getChangedAccInfo = async () => {
    try {
      setChangeAccLoading(true);
      const resp = await privateAxios.get("/user/current-user");
      console.log(resp.data);
      setUserData(resp.data);
      if (resp.status === 200) {
        setChangedAccInfo(true);
        navigate("/loginSecurity");
      } else if (resp.status === 400) {
        setChangedAccInfo(false);
      }
    } catch (error) {
      setChangedAccInfo(false);
    } finally {
      setChangeAccLoading(false);
    }
  };

  const changeAccInfo = async (
    userName: string,
    userSurname: string,
    userNumber: string
  ) => {
    try {
      if (userNumber.length < 9 || userNumber.length > 9) {
        setNumberInputValidation(true);
      } else {
        setNumberInputValidation(false);
      }
      setChangeAccLoading(true);
      const response = await privateAxios.put("/user", {
        first_name: userName,
        last_name: userSurname,
        phone_number: userNumber,
      });
      await getChangedAccInfo();
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setChangeAccLoading(false);
    }
  };

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
      setCreateAccLoading(true);
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
      setCreateAccLoading(false);
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

  return (
    <AuthContext.Provider
      value={{
        createAccLoading,
        error,
        numberInputValidation,
        changedAccInfo,
        setChangedAccInfo,
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
        changeAccLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
