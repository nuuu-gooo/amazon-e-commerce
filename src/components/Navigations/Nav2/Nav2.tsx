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
        <p
          className=" ml-3  text-xl sm:ml-3 text-white no-underline sm:text-base"
          onClick={toggleSidebarFunction}
        >
          <div className="flex items-center">
            <RxHamburgerMenu className=" text-2xl mr-2 cursor-pointer" />
            <p className="mr-[2%]">All</p>
          </div>
        </p>
        {nav2Links.map((link: any) => {
          return (
            <Link
              to={link.link}
              key={link.id}
              className="text-xs hidden sm:ml-3 sm:block text-white no-underline sm:text-base"
            >
              {link.name[locale]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
