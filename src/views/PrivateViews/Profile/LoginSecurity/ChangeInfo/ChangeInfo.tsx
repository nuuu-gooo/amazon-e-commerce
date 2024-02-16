import { AuthContext } from "@src/providers/Auth/AuthContext";
import React, { useContext, useState } from "react";
import { Form } from "react-router-dom";

export const ChangeInfo = () => {
  const { changeAccInfo } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);
  const [newName, setNewName] = useState(userData?.first_name);
  const [newSurname, setNewSurname] = useState(userData?.last_name);
  const [newNumber, setNewNumber] = useState(userData?.phone_number);

  const handleForm = (e: React.MouseEvent<HTMLFormElement>) => {
    return e.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleForm}
          className="border border-solid w-[50%] p-5 rounded-sm"
          action=""
        >
          <h3 className="  text-start">Change Account Info</h3>
          <div className="inputs mt-3">
            <input
              placeholder="Enter new Name"
              className="w-full mb-2  p-2 outline-none"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              placeholder="Enter new Surname"
              className="w-full mb-2  p-2 outline-none"
              value={newSurname}
              onChange={(e) => setNewSurname(e.target.value)}
              type="text"
            />
            <input
              placeholder="Enter new Number"
              className="w-full mb-2  p-2 outline-none"
              type="number"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              changeAccInfo(newName, newSurname, newNumber);

              setNewNumber(""), setNewName(""), setNewSurname("");
            }}
            className=" p-1 w-[full] cursor-pointer px-2.5 rounded-md mt-3 font-titleFont font-sm text-base bg-gradient-to-tr from-yellow-400
        to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 
        active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
          >
            Submt changes
          </button>
        </form>
      </div>
    </div>
  );
};
