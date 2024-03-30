import React, { PropsWithChildren, useContext } from "react";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { Loader } from "@src/assets/Loader/Loader";
export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { authStage } = useContext(AuthContext);

  if (authStage === authStage_EUNM.PENDING) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return authStage === authStage_EUNM.AUTHORIZED ? (
    children
  ) : (
    <Navigate to={"/noRegisteredPage"} />
  );
};
