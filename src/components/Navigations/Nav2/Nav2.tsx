import { GlobalContext } from "@src/providers/GlobalProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { nav2Links } from "@src/Data/Data";

export const Nav2 = () => {
  const { toggleSidebarFunction } = useContext(GlobalContext);

  return (
    <nav className="w-full bg-[#232f3e] p-3">
      <div className="nav-container  sm:flex justify-start items-start">
        {/* <p
          className="ml-3 text-xs sm:ml-3 text-white sm:text-base cursor-pointer"
          onClick={toggleSidebarFunction}
        >
          All
        </p> */}
        <p
          className="ml-3 text-xs sm:ml-3 text-white sm:text-base cursor-pointer"
          onClick={toggleSidebarFunction}
        >
          All
        </p>
        {nav2Links.map((link) => {
          return (
            <Link
              to={link.link}
              key={link.id}
              className=" ml-3  text-xs sm:ml-3 text-white no-underline sm:text-base"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
