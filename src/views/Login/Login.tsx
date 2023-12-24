import React from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import BlackAmazonLogo from "src/assets/black-amazon-logo.svg";
import { LoginComp } from "@src/components/LoginComp/LoginComp";

export const Login = () => {
  return (
    <div>
      <LoginComp />
    </div>
  );
};
