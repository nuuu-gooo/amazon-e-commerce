import React, { useState, useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { amazonServices } from "@src/Data/Data";
import { FormattedMessage } from "react-intl";
import { LContext } from "@src/providers/LProvider/LContext";

export const Footer2 = () => {
  return (
    <div className="bg-[#131921]  py-10">
      <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-8">
        {amazonServices.map((service) => {
          return (
            <div key={service.name} className="flex flex-col">
              <p className="text-[white] text-xs">{service.name}</p>
              <p className="text-[#999] text-xs">{service.description}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <p className="rights text-xs  text-white flex justify-center text-center leading-6 items-center">
          Our Terms and Conditions Privacy Policy Your Privacy Choices <br />{" "}
          for Ads © 1996-2023, Amazon.com, Inc. or its affiliates"
        </p>
      </div>
    </div>
  );
};
