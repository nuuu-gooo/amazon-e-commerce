import React from "react";
import WhiteAmazonLogo from "@src/assets/images/white-amazon-logo.png";

export const Footer3 = () => {
  return (
    <div className="w-full bg-[#131921] justify-center items-center flex p-4">
      <img
        className="min-w-[90px] max-w-[120px]"
        src={WhiteAmazonLogo}
        alt=""
      />
    </div>
  );
};
