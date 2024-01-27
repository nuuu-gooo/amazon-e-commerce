import React from "react";
import { Button, notification, Space } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const Notification: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Product not found",
      description:
        "We couldn't find any products in this category. Try searching for something else.",
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon("error")}>
          See Error!
        </Button>
      </Space>
    </>
  );
};

export default Notification;
