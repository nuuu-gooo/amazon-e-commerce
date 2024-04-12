import React, { useContext } from "react";
import { amazonServices } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";
import { FormattedMessage } from "react-intl";

export const Footer2 = () => {
  const { locale } = useContext(LContext);
  return (
    <div className="bg-[#131921]  py-10 w-full h-full">
      <div className=" flex justify-center items-center flex-col sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-8">
        {amazonServices.map((service) => {
          return (
            <div
              key={service.name[locale]}
              className="flex items-center flex-col sm:items-start"
            >
              <p className="text-[white] text-xs">{service.name[locale]}</p>
              <p className="text-[#999] text-xs text-center sm:text-start items-start">
                {service.description[locale]}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center flex-col">
        <p className="rights text-xs  text-white  text-center leading-6 items-center">
          <FormattedMessage id="terms-conditions" />
        </p>
      </div>
    </div>
  );
};
