import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LContext } from "@src/providers/LProvider/LContext";
import { Locale_ENUM } from "@src/providers/LProvider/LContext";

export const AuthentificationFooter = () => {
  const { toggleLanguage, locale } = useContext(LContext);

  return (
    <div className="w-full sm:w-full mt-[2%]  bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col   justify-center items-center">
      <div className="container p-3  flex justify-center items-center">
        <Link
          className="mr-3 text-[black] text-xs no-underline hover:underline"
          to={
            "https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088"
          }
        >
          Conditions of Use
        </Link>
        <Link
          className="mr-3 text-[black] text-xs no-underline hover:underline"
          to={
            "https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
          }
        >
          Privacy Notice
        </Link>
        <Link
          className="text-xs no-underline text-[black] hover:underline"
          to={"https://www.amazon.com/gp/help/customer/display.html"}
        >
          Help
        </Link>
      </div>
      <p className="text-xs">
        <FormattedMessage id="amazon-affiliates" />
      </p>
      <div className="mt-3 ml-3">
        {locale === Locale_ENUM.EN ? (
          <div>
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center text-[black] bg-transparent border-none text-l  cursor-pointer"
            >
              <img
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
                alt=""
              />
              <p className="ml-2">GER</p>
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center text-[black] bg-transparent border-none text-l  cursor-pointer"
            >
              <img
                className=""
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                alt=""
              />
              <p className="ml-2">EN</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
