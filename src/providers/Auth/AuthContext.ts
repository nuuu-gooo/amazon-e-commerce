import { authStage_EUNM } from "@src/ENUMS/Enums";
import { createContext } from "react";

export type UserDataType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type AuthContextType = {
  userData?: UserDataType;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType | undefined>>;
  setAuthData: React.Dispatch<React.SetStateAction<string | undefined>>;
  authData: string | undefined;
  authStage: authStage_EUNM;
  setAuthStage: React.Dispatch<React.SetStateAction<authStage_EUNM>>;
};

export const AuthContext = createContext<AuthContextType>({
  userData: undefined,
  authData: undefined,
  authStage: authStage_EUNM.UNAUTHORIZED,
  setUserData: () => {},
  setAuthData: () => {},
  setAuthStage: () => {},
});
