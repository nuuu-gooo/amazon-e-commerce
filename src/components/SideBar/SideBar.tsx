import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { FaSearch } from "react-icons/fa";
import { categoryList } from "@src/Data/Data";

export const SideBar = () => {
  const { isToggled, setIsToggled, existingCategories } =
    useContext(GlobalContext);
  const { authStage, userData } = useContext(AuthContext);
  const [sidebarInput, setSideBarInput] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState([]);

  console.log(sidebarInput);

  return (
    <div className=" fixed z-50">
      {isToggled ? (
        <div className="overlay">
          <Sidebar className=" h-full">
            <button
              className="  cursor-pointer absolute left-[60%] bg-[transparent] text-white border-none  mt-6   w-[100px]"
              onClick={() => setIsToggled(false)}
            >
              X
            </button>
            {authStage === authStage_EUNM.AUTHORIZED ? (
              <div className=" w-full p-5 bg-[#131921] text-[white] flex items-center">
                <p>Welcome {userData?.first_name.toUpperCase()}</p>
              </div>
            ) : (
              <Link className="no-underline" to={"/login"}>
                <div className=" w-full p-5 bg-[#131921] text-[white] flex items-center">
                  <PiUserCircleFill className="text-3xl mr-2" />
                  <p>
                    <FormattedMessage id="sign-up-sidebar" />
                  </p>
                </div>
              </Link>
            )}

            <div className="search flex items-center w-full md:hidden">
              <input
                onChange={(e) => setSideBarInput(e.target.value)}
                placeholder="Enter Keyword"
                className="w-full p-3 border-none"
                type="text"
              />
              <button className="w-[30%] p-3 border-none bg-[#febd69]">
                <FaSearch />
              </button>
            </div>

            <Menu>
              <SubMenu label="Categories">
                {existingCategories.map((categorie) => {
                  return (
                    <Link
                      className="no-underline text-[black] hover:opacity-50"
                      to={`productCategory/${categorie.name}`}
                    >
                      <MenuItem>{categorie.name}</MenuItem>
                    </Link>
                  );
                })}
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
