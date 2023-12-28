import { GlobalContext } from "@src/providers/GlobalProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { nav2Links } from "@src/Data/Data";

export const Nav2 = () => {
  const { toggleSidebarFunction } = useContext(GlobalContext);

  return (
    <nav className="w-full bg-[#232f3e] p-3">
      <div className="nav-container  sm:flex justify-start items-center">
        <p
          className=" ml-3  text-xl sm:ml-3 text-white no-underline sm:text-base"
          onClick={toggleSidebarFunction}
        >
          All
        </p>
        {nav2Links.map((link) => {
          return (
            <Link
              to={link.link}
              key={link.id}
              // className=" text-xs hidden sm:ml-3 block text-white no-underline sm:text-base"
              className="text-xs hidden sm:ml-3 sm:block text-white no-underline sm:text-base"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
