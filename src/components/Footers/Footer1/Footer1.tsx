import React, { useContext } from "react";

import { footerLinks } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";
import { FormattedMessage } from "react-intl";

import { Locale_ENUM } from "@src/providers/LProvider/LContext";
import WhiteAamzonLogo from "@src/assets/images/white-amazon-logo.png";

export const Footer1 = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { locale, toggleLanguage } = useContext(LContext);

  return (
    <footer className="footer-wrapper w-full overflow-hidden bg-[#232f3e] m-auto ">
      <button
        onClick={backToTop}
        className=" hover:opacity-50 cursor-pointer border-none back-to-top w-full bg-[#485769] text-white items-center flex justify-center p-3"
      >
        <p>
          <FormattedMessage id="back-to-top" />
        </p>
      </button>
      <div className="md:max-w-5xl w-full m-auto flex flex-col md:flex-row justify-between gap-10 px-5 py-10">
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.category[locale]}>
              <h3 className="text-[white] text-xs sm:text-xl">
                {footerLink.category[locale]}
              </h3>
              {footerLink.links.map((link) => {
                return (
                  <p
                    key={link.name[locale]}
                    className="leading-7 text-[white] text-xs mt-3 "
                  >
                    {link.name[locale]}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <hr className="text-[#5f5f5f58] border-solid   border-1" />
      <div className="flex justify-center items-center">
        <div className="langauge-changer flex justify-center items-center">
          <img
            className=" min-w-[50px] max-w-[80px] mt-3"
            src={WhiteAamzonLogo}
            alt=""
          />
          <div className="langauge flex items-end justify-center mr-3 p-9 ">
            {locale === Locale_ENUM.EN ? (
              <div className="">
                <button
                  onClick={() => toggleLanguage()}
                  className="flex items-center text-white bg-transparent border-none text-l  cursor-pointer"
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
                  className="flex items-center text-white bg-transparent border-none text-l  cursor-pointer"
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
      </div>
    </footer>
  );
};
