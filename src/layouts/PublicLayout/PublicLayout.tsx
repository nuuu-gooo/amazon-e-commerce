import { Footers } from "@src/components/Footers/Footers";
import { Navigations } from "@src/components/Navigations/Navigations";
import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div>
      <Navigations />
      <Outlet />
      <Footers />
    </div>
  );
}
