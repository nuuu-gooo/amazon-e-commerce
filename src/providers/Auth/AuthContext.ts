import { createContext } from "react";

export type UserDataType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type AuthContextType = {
  userData: UserDataType;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType | undefined>>;
  setAuthData: React.Dispatch<React.SetStateAction<string | undefined>>;
  authData: string | undefined;
};

export const AuthContext = createContext({
  userData: undefined,
  authData: undefined,
  setUserData: () => {},
  setAuthData: () => {},
});
