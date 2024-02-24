import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

import { FormattedMessage } from "react-intl";
import AmazonLogo from "@src/assets/images/amazon-lg.png";
import CardImg from "@src/assets/images/cart.png";
import SideBar from "@src/components/SideBar";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { Avatar, Button, Popover } from "antd";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetPopUpProducts } from "@src/hooks/useGetPopUpProduct/useGetPopUpProduct";
import { Loader } from "@src/assets/Loader/Loader";
import { useLocation } from "react-router-dom";
import PopOverCart from "@src/components/UI /PopOverCart";

export const Nav1 = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const { authStage, loggout, userData } = useContext(AuthContext);
  const { existingCategories } = useContext(GlobalContext);
  const [currentCategory, setCurrentCategory] = useState<string>("Electronics");
  const { popUpProducts, loading } = useGetPopUpProducts(searchInputValue);
  const navigate = useNavigate();
  const location = useLocation();

  const content = (
    <div className="flex flex-col">
      <Button type="primary" onClick={loggout}>
        <FormattedMessage id="sign-out" />
      </Button>

      <Button className="mt-3" onClick={() => navigate("/profile")}>
        <FormattedMessage id="profile" />
      </Button>
      <Button className="mt-3" onClick={() => navigate("/")}>
        <FormattedMessage id="home" />
      </Button>
      <Button className="mt-3" onClick={() => navigate("/wishList")}>
        <FormattedMessage id="wish-list" />
      </Button>
    </div>
  );

  const authContent = (
    <div className="flex flex-col">
      <button
        className="cursor-pointer px-2.5 rounded-md mt-3 font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
        onClick={() => navigate("/login")}
      >
        <FormattedMessage id="sign-in" />
      </button>
      <p className="mt-3">
        <FormattedMessage id="new-customer" />{" "}
        <Link to={"/createaccount"}>
          <span>
            <FormattedMessage id="start-here" />
          </span>
        </Link>
      </p>
    </div>
  );

  useEffect(() => {
    if (location.pathname.includes("search")) {
      setSearchInputValue("");
    }
  }, [location.pathname]);

  return (
    <nav className="   wrapper w-full bg-[#131921]">
      <SideBar />
      <div className=" sm:nav-container flex justify-between items-center p-4">
        <div className="left ">
          <Link to={"/"}>
            <img src={AmazonLogo} alt="" />
          </Link>
        </div>
        <div className="md:flex relative hidden md:middle-input-container ml-3 flex-grow min-w-[50%] ">
          {loading ? <Loader /> : ""}
          <div className="flex flex-col absolute z-[9999]  w-[100%] left-[0] right-[30%] top-9     ">
            {popUpProducts.map((product) => {
              return (
                <Link
                  className="no-underline text-[#000]"
                  to={`search/${product.title}`}
                >
                  <div className=" left right-0  top-9  bg-white w-[98%] p-3 flex items-center justify-between  ">
                    <div className="left">
                      <h3>{product.title}</h3>
                    </div>
                    <div className="right">
                      <p className="text-[green]">{product.price}$</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <select
            onChange={(e) => setCurrentCategory(e.target.value)}
            className=" bg-gray-300  p-2 border-none sm:p-2.5 rounded-sm flex-grow "
          >
            {existingCategories.map((category) => {
              return (
                <option
                  key={category.id}
                  defaultValue={category.name[0]}
                  value={category.name}
                >
                  {category.name}
                </option>
              );
            })}
          </select>
          <input
            onChange={(e) => setSearchInputValue(e.target.value)}
            className="w-[100%]  border-none p-1 outline-none flex-grow overflow-hidden "
            autoFocus={true}
            type="text"
            defaultValue={searchInputValue}
          />

          <button
            onClick={() => {
              if (searchInputValue === "") {
                navigate(`/productCategory/${currentCategory}`);
              } else {
                navigate(`search/${currentCategory}/${searchInputValue}`);
              }
            }}
            className="w-[3%] min-w-9 bg-[#febd69] flex items-center justify-center rounded-r-lg border-none p-1 cursor-pointer hover:opacity-60"
          >
            <FaSearch className="text-2xl sm:text-lg " />
          </button>

          <button
            onClick={() => navigate("/login")}
            className=" border-none bg-[transparent] cursor-pointer  text-white ml-3   text-xl   sm:hidden"
          ></button>
        </div>

        <div className="right">
          <div className="md:flex relative flex md:middle-input-container ml-3 flex-grow min-w-[50%]">
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
              <Link to={"/login"}>
                <FaUserCircle className="text-2xl text-[white] md:hidden" />
              </Link>
            )}

            <Popover content={<PopOverCart />}>
              <Link to={"/cart"}>
                <img
                  className="block  sm:hidden ml-3"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAYAAACLmoEDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALaSURBVFhH7ZhNiFJRFMef89QJxsiyUXIYFBfVLFoMKIQTxLRw1SZo0Spk3LlwI4ibQIIgYWCWtkhjGDQIphnaFK0GYRqwTSB+olNhtCjQNM2x0plz8jxo3pi9r8ECf3B53vd/577r3/POfVdmzBiGUbEsO5PNZt9Q/wh7QCKR2AiHwz46NTpgsrP7Q+gBu7u7761W6wUKGRkTdPwjKsBoNBrcbreXTo2UCeAsv01OTl5MpVKvOXfL5fI7i8VynmJGAgsN5/ON32B+zU6n07oBoLtarVbTbDaZZDL5sh/6b6HSaDQzv7tbKpXems1mK+mKgV64XK7rhULhM7Z0Ov0hFArFSBYGDHLiNoCTRb4CwWDwPsmKgWn3HKDb7H8CnE7nNZIFc8TdYrFYVtJdMESzuLjo+g7gPbBURqPRTZDU/StEMMjdQCBwj2TZgKuG9fX1pzS8ZFc5BrprMplmSZeDemFh4Wq73d7DsWW5ysF3twH4/f67JEsGXD3zGKBhZbvKccjdbrfby+fzxenp6XOkS0Ftt9svt1otLJXKuMrBd7derzd8Pt8dkkUDrp6OxWKPaDjFXOXgu9vNZDJ5g8FgIl0M7Pz8vAOe1SaOpairHAPcrXu93iDJggFX9ZFI5AENI9hVFR2Fgu6at7e3Nx0Ohx0rQ6VS+bi6uvqEdEHodLqppaWlW3q9/hQs6Z14PP7C4/HcBOln/wqF4LuL6QClRxT4s+MXxXilc5XPodyVw7HkKh++u1IR66rYnOWA+aq00E5SXxIwX0yFBnxUNlf/Z9i5ublLa2trz3Z2dgorKysPBaxmUmLkw71/4msdVgNczZaXl4e+LEuJUQTcvtdqtS+/nhIAy9DW1laR5IFIieHz193tIOBeP3K5XJa6DLoF25E0dQciJUYRoAporgCwkr2qVqu1DcBmsw39X0FKDB+ppQtRwwSm8AgNtyQtOPZQGIKUmDHHDMMcAAt8KZJPpKhaAAAAAElFTkSuQmCC"
                  alt=""
                />
              </Link>
            </Popover>
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
                  <Popover content={authContent}>
                    <p className="text-sm text-white ">
                      <FormattedMessage id="hello-sign-in-nav-1" />
                    </p>
                    <p className="text-white">
                      <FormattedMessage id="accounts-and-lists" />{" "}
                    </p>
                  </Popover>
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
              <Popover content={<PopOverCart />}>
                <Link className="no-underline text-[white]" to={"/cart"}>
                  <div className="link flex  items-baseline ml-3">
                    <img src={CardImg} alt="" />
                    <p>
                      <FormattedMessage id="card-nav-1" />
                    </p>
                  </div>
                </Link>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
