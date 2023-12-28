import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export const SideBar = () => {
  const { isToggled, setIsToggled } = useContext(GlobalContext);
  return (
    <div className=" fixed">
      {isToggled ? (
        <Sidebar>
          <button onClick={() => setIsToggled(false)}>X</button>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      ) : (
        ""
      )}
      ;
    </div>
  );
};
