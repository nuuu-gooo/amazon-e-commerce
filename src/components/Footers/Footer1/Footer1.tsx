import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { footerLinks } from "@src/Data/Data";

export const Footer1 = () => {
  return (
    <footer className="footer-wrapper w-full bg-[#232f3e] m-auto">
      <div className="max-w-5xl w-full m-auto  flex justify-between gap-10 px-5 py-10">
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.category}>
              <h3 className="text-[white]">{footerLink.category}</h3>
              {footerLink.links.map((link) => {
                return (
                  <p
                    key={link.name}
                    className="leading-7 text-[white] text-xs mt-3"
                  >
                    {link.name}
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
