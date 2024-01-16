import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { LContext } from "@src/providers/LProvider/LContext";

export const AuthentificationFooter = () => {
  const { toggleLanguage } = useContext(LContext);
  return (
    <div className="w-full sm:w-full  bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col   justify-center items-center">
      <div className="container p-3  flex justify-center items-center">
        <Link className="mr-3 text-xs no-underline" to={""}>
          Conditions of Use
        </Link>
        <Link className="mr-3 text-xs no-underline" to={""}>
          Privacy Notice
        </Link>
        <Link className="text-xs no-underline" to={""}>
          Help
        </Link>
      </div>
      <p className="text-xs">
        <FormattedMessage id="amazon-affiliates" />
      </p>
      <button onClick={toggleLanguage}>
        <FormattedMessage id="change.language" />
      </button>
    </div>
  );
};
