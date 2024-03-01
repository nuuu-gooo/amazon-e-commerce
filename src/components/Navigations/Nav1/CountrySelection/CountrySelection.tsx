import { Modal } from "antd";
import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

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
        <select
          onChange={(e) => setGlobalCountry(e.target.value)}
          value={globalCountry}
          className="p-3 w-full cursor-pointer  mt-8"
          name="country-selection"
          id=""
        >
          <option value="Georgia">Georgia</option>
          <option value="England">England </option>
          <option value="Austria">Austria</option>
        </select>
      </Modal>
    </div>
  );
};
