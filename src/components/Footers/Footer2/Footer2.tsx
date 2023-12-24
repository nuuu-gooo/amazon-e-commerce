import React, { useState, useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { amazonServices } from "@src/Data/Data";
import { FormattedMessage } from "react-intl";
import { LContext } from "@src/providers/LProvider/LContext";

export const Footer2 = () => {
  const { toggleLanguage } = useContext(LContext);
  return (
    <div className="bg-[#131921] hidden min-[900px]:block py-10">
      <div className="grid grid-cols-4 max-w-5xl w-full m-auto border-spacing-8 border-separate gap-9">
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
        <p className="rights text-xs text-white flex justify-center text-center leading-4 items-center">
          Our Terms and Conditions Privacy Policy Your Privacy Choices <br />{" "}
          for Ads © 1996-2023, Amazon.com, Inc. or its affiliates"
        </p>
        <p className="text-[white]">
          <FormattedMessage id="hello" />
        </p>
        <button onClick={() => toggleLanguage()}>
          <FormattedMessage id="change.language" />
        </button>
      </div>
    </div>
  );
};
