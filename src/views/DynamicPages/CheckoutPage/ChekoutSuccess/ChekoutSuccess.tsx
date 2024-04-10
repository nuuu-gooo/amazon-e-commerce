import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Result } from "antd";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
export const ChekoutSuccess = () => {
  const orderId = uuidv4();
  const naviagte = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title={
          <p>
            <FormattedMessage id="transaction-successfull" />
          </p>
        }
        subTitle={
          <p>
            Order ID: {orderId}
            <FormattedMessage id="15-min-email" />
          </p>
        }
        extra={[
          <Button className="" onClick={() => naviagte("/")} type="primary">
            <FaHome className="text-2xl" />
          </Button>,
        ]}
      />
    </div>
  );
};
