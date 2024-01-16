import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useIntl, FormattedMessage } from "react-intl";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
  passwordReEnterValidation,
} from "../../utils/DifferentFunctions";

export const CreateAccComp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { formatMessage } = useIntl();
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [surnameValue, setSurnameValue] = useState<string>("");
  const [passwordReEnterValue, setPasswordReEnterValue] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [enterNumVal, setEnterNamVal] = useState<string>();
  const [passwordReEnterError, setPasswordReEnterError] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const handleInput = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailValidation(emailValue, setEmailError);
    passwordValidation(passwordValue, setPasswordError);
    nameValidation(nameValue, setNameError);
    passwordReEnterValidation(
      passwordReEnterValue,
      passwordValue,
      setPasswordReEnterError
    );
  };

  return (
    <div>
      <div>
        <div className="wrapper flex justify-center items-center  h-[60vh]  ">
          <form
            onSubmit={handleInput}
            action=""
            className="sm:border border-zinc-300 border-solid p-9  min-w-[400px] flex justify-start items-start flex-col rounded"
          >
            <h1>
              <FormattedMessage id="register" />
            </h1>
            <div className="input-container mt-4 w-full">
              <h5 className="mb-3">
                <FormattedMessage id="your-name" />
              </h5>
              <input
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
            <div className="input-container mt-4 w-full">
              <h5 className="mb-3">
                <FormattedMessage id="your-surname" />
              </h5>
              <input
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
            <div className="input-container mt-4 w-full">
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
            <div className="input-container mt-4 w-full">
              <h5 className="mb-3">
                {" "}
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
            <div className="input-container mt-4 w-full">
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
            <div className="input-container mt-4 w-full">
              <h5 className="mb-3">
                <FormattedMessage id="enter-number" />
              </h5>
              <div className="second-input flex">
                <input
                  value={enterNumVal}
                  onChange={(e) => {
                    setEnterNamVal(e.target.value);
                  }}
                  className="w-full p-2 outline-none"
                  type="number"
                  placeholder={formatMessage({ id: "enter-number" })}
                />
              </div>
              {passwordReEnterError ? (
                <p className="text-[red] text-xs mt-3">
                  <FormattedMessage id="re-enter-error" />
                </p>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="continue-btn">
              <FormattedMessage id="continue-btn" />
            </button>
          </form>
        </div>
      </div>
      <div className="new-to-amazon flex justify-center items-center mt-[4%]  flex-col">
        <button onClick={() => navigate("/login")} className="create-acc-btn">
          <FormattedMessage id="already-have-an-account" />
        </button>
      </div>
    </div>
  );
};
