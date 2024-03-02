import { Modal } from "antd";
import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { countryList } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";
export const CountrySelection = ({
  statusModal,
  setStatusModal,
}: {
  statusModal: boolean;
  setStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    globalCountry,
    setGlobalCountry,
    selectedNewCountry,
    setSelectedNewCountry,
  } = useContext(GlobalContext);

  const { locale } = useContext(LContext);

  return (
    <div>
      <Modal
        // onOk={() => setSelectedNewCountry(globalCountry)}
        onOk={() => {
          setSelectedNewCountry(globalCountry);
          setStatusModal(false);
        }}
        centered={true}
        onCancel={() => setStatusModal(false)}
        open={statusModal}
      >
        <h3>Change Location</h3>
        <select
          onChange={(e) => setGlobalCountry(e.target.value)}
          value={globalCountry}
          className="p-3 w-full cursor-pointer  mt-3"
          name="country-selection"
          id=""
        >
          {countryList.map((country) => {
            return (
              <option value={country.name[locale]}>
                {country.name[locale]}
              </option>
            );
          })}
        </select>
      </Modal>
    </div>
  );
};
