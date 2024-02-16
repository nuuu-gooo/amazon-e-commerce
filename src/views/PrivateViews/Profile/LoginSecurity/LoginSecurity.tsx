import React from "react";
import { useContext } from "react";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { Avatar } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginSecurity = () => {
  const { userData } = useContext(AuthContext);
  const naviagte = useNavigate();
  document.title = "Amazon | Personal Info";
  return (
    <div className="flex justify-center items-center p-8 flex-col">
      <Avatar className="w-[full]">
        <p>{userData?.first_name[0].toUpperCase()}</p>
        <p>{userData?.last_name[0].toUpperCase()}</p>
      </Avatar>
      <div className="pers-info flex justify-center flex-col mt-3 border-solid border-black p-3  rounded-lg ">
        <p>First Name / {userData?.first_name}</p>
        <p className="mt-3">Last Name / {userData?.last_name}</p>
        <p className="mt-3">E-Mail / {userData?.email}</p>
        <button
          onClick={() => naviagte("/loginSecurity/changeInfo")}
          className=" p-1 w-[full] cursor-pointer px-2.5 rounded-md mt-3 font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
        to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
        active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
        >
          Change Information
        </button>
      </div>
    </div>
  );
};
