import React, { useContext, useState, ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { categoryList } from "@src/Data/Data";
import AmazonLogo from "@src/assets/images/amazon-lg.png";
import CardImg from "@src/assets/images/cart.png";
import { SideBar } from "@src/components/SideBar/SideBar";
import { LContext } from "@src/providers/LProvider/LContext";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { Avatar, Button, Popover } from "antd";

export const Nav1 = () => {
  const { locale, toggleLanguage } = useContext(LContext);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const { authStage, loggout, userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setSearchInputValue(newCategory);
  };

  const content = (
    <div className="flex flex-col">
      <Button type="primary" onClick={loggout}>
        <FaSignOutAlt />
      </Button>

      <Button className="mt-3" onClick={() => navigate("/profile")}>
        Profile
      </Button>
      <Button className="mt-3" onClick={() => navigate("/")}>
        Home
      </Button>
    </div>
  );

  return (
    <nav className="wrapper w-full bg-[#131921]">
      <SideBar />
      <div className="nav-container flex justify-between items-center p-4">
        <div className="left ">
          <Link to={"/"}>
            <img src={AmazonLogo} alt="" />
          </Link>
        </div>
        <div className="middle-input-container ml-3 flex flex-grow">
          <select
            onChange={handleCategoryChange}
            className=" bg-gray-300 min-w-[20%] p-2 border-none sm:p-2.5 rounded-sm w-[50%]  "
          >
            {categoryList.map((category) => {
              return (
                <option key={category.id} value={category.name[locale]}>
                  {category.name[locale]}
                </option>
              );
            })}
          </select>
          <input
            className="w-[100%] border-none p-1 outline-none"
            autoFocus={true}
            type="text"
            defaultValue={searchInputValue}
          />
          <button className="w-[3%] min-w-9 bg-[#febd69] flex items-center justify-center rounded-r-lg border-none p-1">
            <FaSearch className="text-2xl sm:text-lg " />
          </button>
          <button
            className="ml-3 text-2xl border-none bg-[transparent] cursor-pointer"
            onClick={toggleLanguage}
          >
            <FormattedMessage id="change.language" />
          </button>
        </div>
        <div className="right">
          <div className="mobile-res flex items-center">
            {authStage === authStage_EUNM.AUTHORIZED ? (
              <div>
                <Popover
                  title={`Welcome ${userData?.first_name}`}
                  content={content}
                >
                  <Avatar
                    className=" ml-3 bg-[#f89e38] sm:hidden text-[black]"
                    icon={userData?.first_name[0]}
                  />
                </Popover>
              </div>
            ) : (
              ""
            )}

            <Link to={""}>
              <img
                className="block  sm:hidden ml-3"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAYAAACLmoEDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALaSURBVFhH7ZhNiFJRFMef89QJxsiyUXIYFBfVLFoMKIQTxLRw1SZo0Spk3LlwI4ibQIIgYWCWtkhjGDQIphnaFK0GYRqwTSB+olNhtCjQNM2x0plz8jxo3pi9r8ECf3B53vd/577r3/POfVdmzBiGUbEsO5PNZt9Q/wh7QCKR2AiHwz46NTpgsrP7Q+gBu7u7761W6wUKGRkTdPwjKsBoNBrcbreXTo2UCeAsv01OTl5MpVKvOXfL5fI7i8VynmJGAgsN5/ON32B+zU6n07oBoLtarVbTbDaZZDL5sh/6b6HSaDQzv7tbKpXems1mK+mKgV64XK7rhULhM7Z0Ov0hFArFSBYGDHLiNoCTRb4CwWDwPsmKgWn3HKDb7H8CnE7nNZIFc8TdYrFYVtJdMESzuLjo+g7gPbBURqPRTZDU/StEMMjdQCBwj2TZgKuG9fX1pzS8ZFc5BrprMplmSZeDemFh4Wq73d7DsWW5ysF3twH4/f67JEsGXD3zGKBhZbvKccjdbrfby+fzxenp6XOkS0Ftt9svt1otLJXKuMrBd7derzd8Pt8dkkUDrp6OxWKPaDjFXOXgu9vNZDJ5g8FgIl0M7Pz8vAOe1SaOpairHAPcrXu93iDJggFX9ZFI5AENI9hVFR2Fgu6at7e3Nx0Ohx0rQ6VS+bi6uvqEdEHodLqppaWlW3q9/hQs6Z14PP7C4/HcBOln/wqF4LuL6QClRxT4s+MXxXilc5XPodyVw7HkKh++u1IR66rYnOWA+aq00E5SXxIwX0yFBnxUNlf/Z9i5ublLa2trz3Z2dgorKysPBaxmUmLkw71/4msdVgNczZaXl4e+LEuJUQTcvtdqtS+/nhIAy9DW1laR5IFIieHz193tIOBeP3K5XJa6DLoF25E0dQciJUYRoAporgCwkr2qVqu1DcBmsw39X0FKDB+ppQtRwwSm8AgNtyQtOPZQGIKUmDHHDMMcAAt8KZJPpKhaAAAAAElFTkSuQmCC"
                alt=""
              />
            </Link>
          </div>

          <div className="all-links hidden sm:block">
            <div className="links flex items-center">
              <div className="link flex flex-col items-start ml-3">
                {authStage === authStage_EUNM.AUTHORIZED ? (
                  <Popover
                    title={`Welcome ${userData?.first_name}`}
                    content={content}
                  >
                    <Avatar
                      className="bg-[#f89e38] text-[black]"
                      icon={`${(userData?.first_name[0] || "").toUpperCase()} ${
                        userData?.last_name[0] || "".toUpperCase()
                      }`}
                    />
                  </Popover>
                ) : (
                  <Link className="no-underline text-[white]" to={"/login"}>
                    <p className="text-sm ">
                      <FormattedMessage id="hello-sign-in-nav-1" />
                    </p>
                    <p>
                      <FormattedMessage id="accounts-and-lists" />{" "}
                    </p>
                  </Link>
                )}
              </div>
              <Link className="no-underline text-[white]" to={"/orders"}>
                <div className="link flex flex-col items-start ml-3">
                  <p className="text-sm">
                    <FormattedMessage id="returns" />
                  </p>
                  <p>
                    <FormattedMessage id="orders" />
                  </p>
                </div>
              </Link>
              <Link className="no-underline text-[white]" to={""}>
                <div className="link flex  items-baseline ml-3">
                  <img src={CardImg} alt="" />
                  <p>
                    <FormattedMessage id="card-nav-1" />
                  </p>
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
