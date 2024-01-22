import React, { PropsWithChildren } from "react";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@src/providers/Auth/AuthContext";
export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { authStage } = useContext(AuthContext);

  return authStage === authStage_EUNM.AUTHORIZED ? (
    children
  ) : (
    <Navigate to={"/"} replace />
  );
};
