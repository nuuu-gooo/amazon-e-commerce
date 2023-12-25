import { AuthentificationFooter } from "@src/components/Footers/AuthentificationFooter/AuthentificationFooter";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import BlackAmazonLogo from "src/assets/black-amazon-logo.svg";

export const AuthentficiationLayout = () => {
  return (
    <div>
      <Link className="amazon-logo flex justify-center items-center" to={"/"}>
        <img
          className="w-[1%] min-w-[150px] mb-[4%] "
          src={BlackAmazonLogo}
          alt=""
        />
      </Link>

      <Outlet />
      <AuthentificationFooter />
    </div>
  );
};
