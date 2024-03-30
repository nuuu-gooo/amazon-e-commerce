import React from "react";
import { Result } from "antd";
import { useNavigate } from "react-router-dom";

export const NotRegisteredPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Result
        status="403"
        title="Not Registered"
        subTitle="hmmm... you seem to access a page that requires authentification! "
        extra={
          <button
            className=" p-1 w-[30%] cursor-pointer px-2.5 rounded-md mt-3 font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
        to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
        active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        }
      />
    </div>
  );
};
