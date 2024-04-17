import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  emailValidation,
  passwordValidation,
} from "@src/utils/DifferentFunctions";
import { FormattedMessage, useIntl } from "react-intl";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { Button } from "antd";

export const LoginComp = () => {
  const { formatMessage } = useIntl();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const { signInFetch, loading } = useContext(AuthContext);
  document.title = "Amazon | Sign In";
  const handleInput = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidation(emailValue, setEmailError);
    passwordValidation(passwordValue, setPasswordError);
    if (passwordValue !== "" && emailValue !== "") {
      await signInFetch(emailValue, passwordValue);
    } else {
      alert("Please fill out every input!");
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      emailValidation(emailValue, setEmailError);
      passwordValidation(passwordValue, setPasswordError);
      if (passwordValue !== "" && emailValue !== "") {
        await signInFetch(emailValue, passwordValue);
      } else {
        alert("Please fill out every input!");
      }
    }
  };

  const navigate = useNavigate();
  return (
    <div className="wrapper flex justify-center items-center flex-col p-9  ">
      <form
        onKeyDown={handleKeyPress}
        className="border border-zinc-300 border-solid h-[full]     p-9  min-w-[40%] flex justify-center items-start flex-col rounded mb-[1%]"
      >
        <h1>
          <FormattedMessage id="sign-in" />
        </h1>
        <div className=" mt-4 w-full">
          <h5 className="mb-3">
            <FormattedMessage id="e-mail" />
          </h5>
          <input
            value={emailValue}
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
              <FormattedMessage id="include@-error" />
            </p>
          ) : (
            ""
          )}
        </div>
        <div className=" mt-4 w-full">
          <h5 className="mb-3">
            <FormattedMessage id="password" />
          </h5>
          <div className="second-input flex">
            <input
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
              className="w-full p-2 outline-none"
              type={isPasswordVisible ? "text" : "password"}
              placeholder={formatMessage({ id: "password" })}
            />

            <button
              type="button"
              className="p-2 "
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {passwordError ? (
            <p className="mt-3 text-xs text-[red]">
              <FormattedMessage id="wrong-password" />
            </p>
          ) : (
            ""
          )}
        </div>

        <Button
          loading={loading}
          onClick={handleInput}
          className="continue-btn"
        >
          <p>
            <FormattedMessage id="continue-btn" />
          </p>
        </Button>
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
        <button
          onClick={() => navigate("/createaccount")}
          className="create-acc-btn"
        >
          <FormattedMessage id="create-your-amazon-account" />
        </button>
      </form>
    </div>
  );
};
