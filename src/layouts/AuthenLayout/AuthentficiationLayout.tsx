import AuthentificationFooter from "@src/components/Footers/AuthentificationFooter";
import { Link, Outlet } from "react-router-dom";
import BlackAmazonLogo from "src/assets/SVG/black-amazon-logo.svg";

export const AuthentficiationLayout = () => {
  return (
    <div className="">
      <Link className="amazon-logo flex justify-center items-center" to={"/"}>
        <img
          className="sm: w-[1%] min-w-[200px]  flex items-center "
          src={BlackAmazonLogo}
          alt=""
        />
      </Link>

      <Outlet />
      <AuthentificationFooter />
    </div>
  );
};
