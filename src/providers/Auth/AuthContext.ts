import { authStage_EUNM } from "@src/ENUMS/Enums";
import { createContext } from "react";

export type UserDataType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type TokenTypes = {
  access_token: string;
  refresh_token: string;
};

export type AuthContextType = {
  userData?: UserDataType;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType | undefined>>;
  setAuthData: React.Dispatch<React.SetStateAction<string | undefined>>;
  authData: string | undefined;
  authStage: authStage_EUNM;
  setAuthStage: React.Dispatch<React.SetStateAction<authStage_EUNM>>;
  createAccFetch: any;
  signInFetch: any;
  loggout: any;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
  error: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  userData: undefined,
  error: false,
  authData: undefined,
  authStage: authStage_EUNM.UNAUTHORIZED,
  loading: false,
  success: false,
  signInFetch: () => {},
  setUserData: () => {},
  setAuthData: () => {},
  setAuthStage: () => {},
  createAccFetch: () => {},
  setLoading: () => {},
  setSuccess: () => {},
  loggout: () => {},
});
