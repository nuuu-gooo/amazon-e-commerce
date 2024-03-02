import { GlobalContext } from "@src/providers/GlobalProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LContext } from "@src/providers/LProvider/LContext";
import { nav2Links } from "@src/Data/Data";
import { RxHamburgerMenu } from "react-icons/rx";

export const Nav2 = () => {
  const { toggleSidebarFunction } = useContext(GlobalContext);
  const { locale } = useContext(LContext);

  return (
    <nav className="w-full bg-[#232f3e] p-3">
      <div className="nav-container  sm:flex justify-start items-center">
        <div>
          <p
            className=" text-center  all-btn shadow-sm rounded-sm  shadow-black bg-transparent p-2  ml-3  text-xl sm:ml-3 text-white no-underline sm:text-base cursor-pointer"
            onClick={toggleSidebarFunction}
          >
            All
          </p>
        </div>
        {nav2Links.map((link: any) => {
          return (
            <Link
              to={link.link}
              key={link.id}
              className="    text-xs hidden sm:ml-3 sm:block text-white no-underline sm:text-base"
            >
              {link.name[locale]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
