import React, { PropsWithChildren, useState } from "react";
import { AuthContext, UserDataType } from "./AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { log } from "console";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataType>();
  const [authData, setAuthData] = useState<string>();
  const [authStage, setAuthStage] = useState<authStage_EUNM>(
    authStage_EUNM.UNAUTHORIZED
  );
  console.log(authStage);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        authData,
        setAuthData,
        authStage,
        setAuthStage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
