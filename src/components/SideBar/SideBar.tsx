import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";

export const SideBar = () => {
  const { isToggled, setIsToggled } = useContext(GlobalContext);
  return (
    <div className=" fixed">
      {isToggled ? (
        <div className="overlay">
          <Sidebar className=" h-full">
            <button
              className="ß p-3  w-[100px]"
              onClick={() => setIsToggled(false)}
            >
              X
            </button>
            <div className="sign-up w-full bg-[blue]">
              <p>
                <FormattedMessage id="sign-up" />
              </p>
            </div>
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
