import React, { useState, useContext } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { FaSearch, FaTrash } from "react-icons/fa";
import { useGetPopUpProducts } from "@src/hooks/useGetPopUpProduct/useGetPopUpProduct";
import { nav2Links } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";
import { Locale_ENUM } from "@src/providers/LProvider/LContext";

export const SideBar = () => {
  const { locale, toggleLanguage } = useContext(LContext);
  const { authStage, userData, loggout } = useContext(AuthContext);

  const [sidebarInput, setSideBarInput] = useState<string>("");
  const { popUpProducts } = useGetPopUpProducts(sidebarInput);
  const intl = useIntl();

  const navigate = useNavigate();

  const {
    isToggled,
    setIsToggled,
    existingCategories,
    currentCategory,
    setCurrentCategory,
  } = useContext(GlobalContext);

  const handleKeyPress = (e: any) => {
    const keypress = e.key;

    if (keypress === "Enter") {
      navigate(`/search/${sidebarInput}`);

      if (sidebarInput === "") {
        navigate(`/productCategory/${currentCategory}`);
      } else if (sidebarInput !== "" && currentCategory !== "") {
        navigate(`search/${currentCategory}/${sidebarInput}`);
      } else {
        navigate(`/search/${sidebarInput}`);
      }
    }
  };

  const handleOnClick = () => {
    if (sidebarInput === "") {
      navigate(`/productCategory/${currentCategory}`);
    } else if (sidebarInput !== "" && currentCategory !== "") {
      navigate(`search/${currentCategory}/${sidebarInput}`);
    } else {
      navigate(`/search/${sidebarInput}`);
    }
  };

  return (
    <div className=" fixed z-50">
      {isToggled ? (
        <div className="overlay ">
          <Sidebar className=" h-full  ">
            <button
              className="  cursor-pointer absolute left-[77%]  text-black border-none  mt-6 text-xl bg-[#febd69] flex items-center justify-center rounded-3xl w-[20%] hover:opacity-50"
              onClick={() => setIsToggled(false)}
            >
              X
            </button>
            {authStage === authStage_EUNM.AUTHORIZED ? (
              <div className=" w-full p-5 bg-[#131921] text-[white] flex items-center">
                <p>
                  <FormattedMessage id="welcome" />{" "}
                  {userData?.first_name.toUpperCase()}
                </p>
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
                placeholder={intl.formatMessage({ id: "search" })}
                className="w-full p-3 border-none outline-none"
                value={sidebarInput}
                type="text"
              />
              <button
                onClick={handleOnClick}
                className="w-[30%] p-3 border-none bg-[#febd69] cursor-pointer hover:opacity-50"
              >
                <FaSearch />
              </button>
              <button
                onClick={() => setSideBarInput("")}
                className="w-[30%] p-3 flex justify-center bg-[#ef941d] text-xs text-black  border-none cursor-pointer hover:opacity-50"
              >
                <FaTrash />
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
                        {product?.title}
                        <img className="w-[10%]" src={product.image} alt="" />
                      </li>
                    </ul>
                    <hr />
                  </div>
                </Link>
              );
            })}

            <Menu>
              <SubMenu
                label={
                  <p>
                    <FormattedMessage id="categories" />
                  </p>
                }
              >
                {existingCategories.map((categorie) => {
                  return (
                    <Link
                      key={categorie.id}
                      className="no-underline text-[black] hover:opacity-50"
                      to={`productCategory/${categorie.name}`}
                    >
                      <MenuItem
                        onClick={() => setCurrentCategory(categorie.name)}
                      >
                        {categorie.name}
                      </MenuItem>
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
                      to={nav2Link.link}
                      className="no-underline text-[black] hover:opacity-50"
                    >
                      <MenuItem>{nav2Link.name[locale]}</MenuItem>
                    </Link>
                  );
                })}
              </SubMenu>
              <SubMenu
                className="block "
                label={
                  <p>
                    <FormattedMessage id="help-and-settings" />
                  </p>
                }
              >
                {authStage === authStage_EUNM.AUTHORIZED && (
                  <MenuItem onClick={() => navigate("/profile")}>
                    <FormattedMessage id="your-account" />
                  </MenuItem>
                )}
                {authStage === authStage_EUNM.AUTHORIZED ? (
                  <MenuItem onClick={loggout}>
                    <FormattedMessage id="sign-out" />
                  </MenuItem>
                ) : (
                  <MenuItem onClick={() => navigate("/login")}>
                    <FormattedMessage id="sign-in" />
                  </MenuItem>
                )}
              </SubMenu>
            </Menu>
            <div className="bg-[#ef941d] p-3 flex justify-center items-center">
              {currentCategory ? (
                <h5 className="text-black">
                  <FormattedMessage id="current-category" />:{" "}
                  <span className="text-xs underline">{currentCategory} </span>
                </h5>
              ) : (
                <h5>
                  <FormattedMessage id="no-category" />
                </h5>
              )}
              <button
                onClick={() => setCurrentCategory("")}
                className="ml-2 p-1  bg-[#febd69] border-none hover:cursor-pointer w-full"
              >
                <FormattedMessage id="reset" />
              </button>
            </div>
            <div className="flex justify-center items-center  p-3">
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
          </Sidebar>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
