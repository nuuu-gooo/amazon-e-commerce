import React from "react";
import BlackAmazonLogo from "src/assets/black-amazon-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { LoginFooter } from "../Footers/LoginFooter/LoginFooter";

import { FormattedMessage, useIntl } from "react-intl";

export const Top = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { formatMessage } = useIntl();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>("");

  const handleInput = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const emailValidation = () => {
    if (!emailValue.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordValidation = () => {
    if (passwordValue.length < 7) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <div>
      <Link className="amazon-logo flex justify-center items-center" to={"/"}>
        <img
          className="w-[1%] min-w-[150px] mb-3 "
          src={BlackAmazonLogo}
          alt=""
        />
      </Link>

      <div>
        <div className="wrapper flex justify-center items-center  h-[50vh] ">
          <form
            onSubmit={handleInput}
            action=""
            className="border border-zinc-300 border-solid p-9 w-[20%] min-w-[400px] flex justify-start items-start flex-col rounded"
          >
            <h1>
              {" "}
              <FormattedMessage id="sign-in" />
            </h1>
            <div className="input-container mt-4 w-full">
              <h5 className="mb-3">
                {" "}
                <FormattedMessage id="e-mail" />
              </h5>
              <input
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                className="w-full p-2 outline-none 


              "
                placeholder={formatMessage({ id: "e-mail" })}
                type="email"
              />
              {emailError ? (
                <p className="mt-3 text-xs text-[red]">
                  <FormattedMessage id="include@" />
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="input-container mt-4 w-full">
              <h5 className="mb-3">
                {" "}
                <FormattedMessage id="password" />
              </h5>
              <div className="second-input flex">
                <input
                  onChange={(e) => {
                    setPasswordValue(e.target.value);
                  }}
                  className="w-full p-2 outline-none"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder={formatMessage({ id: "password" })}
                />
                <button
                  className="p-2 "
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {passwordError ? (
                <p className="text-[red] text-xs mt-3">
                  <FormattedMessage id="min-length" />
                </p>
              ) : (
                ""
              )}
            </div>
            <button
              onClick={() => {
                emailValidation();
                passwordValidation();
              }}
              type="submit"
              className="w-full py-1.5 text-sm rounded-sm bg-gradient-to-t
 from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-t border
 border-zinc-400 active:border-yellow-800 mt-4 cursor-pointer"
            >
              <FormattedMessage id="continue-btn" />
            </button>
            <div className="links">
              <p className="text-black text-xs mt-5 leading-5">
                <FormattedMessage id="privacy-notice" />
              </p>
            </div>

            <Link
              to={""}
              className="need-help-container flex items-center mt-4 no-underline hover: text-[#c45500]"
            >
              <IoMdArrowDropright />
              <p className="text-black text-xs ml-1">
                <FormattedMessage id="need-help" />
              </p>
            </Link>
          </form>
        </div>
      </div>
      <div className="new-to-amazon flex justify-center items-center mt-9 flex-col">
        <p className="leading-9 text-xs">
          <FormattedMessage id="new-to-amazon" />
        </p>
        <hr className="w-[20%] min-w-[200px] " />
        <button
          className="w-[25%] min-w-[300px] p-2  cursor-pointer py-1 text-sm mt-4 font-normal rounded-lg
 bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b
 border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
        >
          <FormattedMessage id="create-your-amazon-account" />
        </button>
      </div>
    </div>
  );
};