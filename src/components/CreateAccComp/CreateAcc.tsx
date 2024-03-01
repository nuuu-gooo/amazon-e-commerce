import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useIntl, FormattedMessage } from "react-intl";
import Alert from "antd/es/alert/Alert";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
  passwordReEnterValidation,
  numberValidation,
  surnameValidation,
} from "../../utils/DifferentFunctions";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { LContext } from "@src/providers/LProvider/LContext";

export const CreateAccComp = () => {
  document.title = "Amazon | Create account";
  const { createAccFetch, success, authStage, error } = useContext(AuthContext);
  const { formatMessage } = useIntl();
  const { locale } = useContext(LContext);
  console.log(locale);
  const [enterNumVal, setEnterNumVal] = useState<string>("");

  useEffect(() => {
    if (locale === "de") {
      setEnterNumVal("49");
    } else if (locale === "en") {
      setEnterNumVal("995");
    }
  }, [locale]);
  console.log(enterNumVal);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [surnameValue, setSurnameValue] = useState<string>("");
  const [passwordReEnterValue, setPasswordReEnterValue] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [passwordReEnterError, setPasswordReEnterError] =
    useState<boolean>(false);
  const [enterNumError, setEnterNumError] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidation(emailValue, setEmailError);
    numberValidation(enterNumVal, setEnterNumError);
    passwordValidation(passwordValue, setPasswordError);
    nameValidation(nameValue, setNameError);
    surnameValidation(surnameValue, setSurnameError);
    createAccFetch(
      nameValue,
      surnameValue,
      emailValue,
      passwordValue,
      enterNumVal
    );
    passwordReEnterValidation(
      passwordReEnterValue,
      passwordValue,
      setPasswordReEnterError
    );

    if (authStage === authStage_EUNM.AUTHORIZED) {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-3">
        {success && (
          <Alert
            showIcon
            message={<FormattedMessage id="account-creation-success" />}
            type="success"
          />
        )}
        {error && (
          <Alert
            className="inline-flex justify-center items-center"
            showIcon
            message={<FormattedMessage id="account-creation-fail:" />}
            type="error"
          />
        )}
      </div>
      <div className="wrapper flex justify-center items-center m-auto h-[full] p-9   ">
        <form
          action=""
          // className="sm:border border-zinc-300 border-solid p-8  w-[full] flex justify-start items-start flex-col rounded mb-[1%]"
          className="border border-zinc-300 border-solid h-[full]     p-9  min-w-[40%] flex justify-center items-start flex-col rounded mb-[1%]"
        >
          <h1>
            <FormattedMessage id="register" />
          </h1>
          <div className=" mt-4 w-full">
            <h5 className="mb-3">
              <FormattedMessage id="your-name" />
            </h5>
            <input
              name="first_name"
              value={nameValue}
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
              className="w-full p-2 outline-none

                "
              placeholder={formatMessage({ id: "your-name" })}
              type="text"
            />
            {nameError ? (
              <p className="mt-3 text-xs text-[red]">
                <FormattedMessage id="name-error" />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className=" mt-4 w-full">
            <h5 className="mb-3">
              <FormattedMessage id="your-surname" />
            </h5>
            <input
              name="last_name"
              value={surnameValue}
              onChange={(e) => {
                setSurnameValue(e.target.value);
              }}
              className="w-full p-2 outline-none

                "
              placeholder={formatMessage({ id: "your-surname" })}
              type="text"
            />
            {surnameError ? (
              <p className="mt-3 text-xs text-[red]">
                <FormattedMessage id="name-error" />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className=" mt-4 w-full">
            <h5 className="mb-3">
              <FormattedMessage id="e-mail" />
            </h5>
            <input
              name="last_name"
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
                name="password"
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
              <p className="text-[red] text-xs mt-3">
                <FormattedMessage id="min-length-error" />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="mt-4 w-full">
            <h5 className="mb-3">
              <FormattedMessage id="re-enter-password" />
            </h5>
            <div className="second-input flex">
              <input
                value={passwordReEnterValue}
                onChange={(e) => {
                  setPasswordReEnterValue(e.target.value);
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
            {passwordReEnterError ? (
              <p className="text-[red] text-xs mt-3">
                <FormattedMessage id="re-enter-error" />
              </p>
            ) : (
              ""
            )}
          </div>
          <div className=" mt-4 w-full">
            <h5 className="mb-3">
              <FormattedMessage id="enter-number" />
            </h5>
            <div className="second-input flex">
              <input
                value={enterNumVal}
                onChange={(e) => {
                  setEnterNumVal(e.target.value);
                }}
                className="w-full p-2 outline-none"
                type="tel"
                placeholder={formatMessage({ id: "enter-number" })}
              />
            </div>
            {enterNumError ? (
              <p className="text-[red] text-xs mt-3">
                <FormattedMessage id="number-error" />
              </p>
            ) : (
              ""
            )}
          </div>
          <button onClick={handleInput} type="button" className="continue-btn">
            <FormattedMessage id="continue-btn" />
          </button>
          <button
            onClick={() => navigate("/login")}
            className="create-acc-btn "
          >
            <FormattedMessage id="already-have-an-account" />
          </button>
        </form>
      </div>
    </div>
  );
};
