import React, { PropsWithChildren, useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { authStage_EUNM, orderStatus_ENUM } from "@src/ENUMS/Enums";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";

export const PrivateOrderStatus = ({ children }: PropsWithChildren) => {
  const { orderStatus } = useContext(GlobalContext);
  const { authStage } = useContext(AuthContext);

  return orderStatus === orderStatus_ENUM.ORDERED &&
    authStage === authStage_EUNM.AUTHORIZED ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};
