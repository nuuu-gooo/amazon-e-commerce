import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { footerLinks } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";
import { FormattedMessage } from "react-intl";

export const Footer1 = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { locale } = useContext(LContext);

  return (
    <footer className="footer-wrapper w-full bg-[#232f3e] m-auto">
      <button
        onClick={backToTop}
        className=" hover:opacity-50 cursor-pointer border-none back-to-top w-full bg-[#485769] text-white items-center flex justify-center p-3"
      >
        <p>
          <FormattedMessage id="back-to-top" />
        </p>
      </button>
      <div className="max-w-5xl w-full m-auto  flex justify-between gap-10 px-5 py-10">
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.category[locale]}>
              <h3 className="text-[white]">{footerLink.category[locale]}</h3>
              {footerLink.links.map((link) => {
                return (
                  <p
                    key={link.name[locale]}
                    className="leading-7 text-[white] text-xs mt-3"
                  >
                    {link.name[locale]}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};
