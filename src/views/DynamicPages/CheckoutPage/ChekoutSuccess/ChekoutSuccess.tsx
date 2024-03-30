import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Result } from "antd";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const ChekoutSuccess = () => {
  const orderId = uuidv4();
  const naviagte = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="Transaction Succesfull"
        subTitle={`Order ID: ${orderId}. It takes up to 15 minutes for your confirmation e-mail`}
        extra={[
          <Button className="" onClick={() => naviagte("/")} type="primary">
            <FaHome className="text-2xl" />
          </Button>,
        ]}
      />
    </div>
  );
};
