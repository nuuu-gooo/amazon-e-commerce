import React, { useState, useContext } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { FaSearch } from "react-icons/fa";
import { useGetPopUpProducts } from "@src/hooks/useGetPopUpProduct/useGetPopUpProduct";
import { nav2Links } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";

export const SideBar = () => {
  const { locale } = useContext(LContext);
  const { authStage, userData } = useContext(AuthContext);
  const [sidebarInput, setSideBarInput] = useState<string>("");
  const { popUpProducts } = useGetPopUpProducts(sidebarInput);
  const navigate = useNavigate();
  const { isToggled, setIsToggled, existingCategories } =
    useContext(GlobalContext);

  console.log(sidebarInput, popUpProducts);

  const handleKeyPress = (e: any) => {
    const keypress = e.key;

    if (keypress === "Enter") {
      navigate(`/search/${sidebarInput}`);
    }
  };
  return (
    <div className=" fixed z-50">
      {isToggled ? (
        <div className="overlay">
          <Sidebar className=" h-full">
            <button
              className="  cursor-pointer absolute left-[77%]  text-black border-none  mt-6 text-xl bg-[#febd69] flex items-center justify-center rounded-3xl w-[20%] hover:opacity-50"
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

            <div className=" search flex items-center relative w-full ">
              <input
                onKeyDown={handleKeyPress}
                onChange={(e) => setSideBarInput(e.target.value)}
                placeholder="Enter Keyword"
                className="w-full p-3 border-none"
                type="text"
              />
              <button className="w-[30%] p-3 border-none bg-[#febd69]">
                <FaSearch />
              </button>
            </div>

            {popUpProducts.map((product) => {
              return (
                <Link
                  className="no-underline text-[black]"
                  to={`/search/${product.title}`}
                >
                  <div className="bg-[white] p-9 w-full flex items-center ">
                    <ul>
                      <li>
                        {product.title}
                        <img className="w-[10%]" src={product.image} alt="" />
                      </li>
                    </ul>
                    <hr />
                  </div>
                </Link>
              );
            })}

            <Menu>
              <SubMenu label="Categories">
                {existingCategories.map((categorie) => {
                  return (
                    <Link
                      key={categorie.id}
                      className="no-underline text-[black] hover:opacity-50"
                      to={`productCategory/${categorie.name}`}
                    >
                      <MenuItem>{categorie.name}</MenuItem>
                    </Link>
                  );
                })}
              </SubMenu>
            </Menu>

            <Menu>
              <SubMenu className="block " label="Amazon Services">
                {nav2Links.map((nav2Link) => {
                  return (
                    <Link
                      key={nav2Link.id}
                      className="no-underline text-[black] hover:opacity-50"
                      to={``}
                    >
                      <MenuItem>{nav2Link.name[locale]}</MenuItem>
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
