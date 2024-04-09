import { profile_elements } from "@src/Data/Data";
import { LContext } from "@src/providers/LProvider/LContext";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
export const Profile = () => {
  const { locale } = useContext(LContext);
  document.title = "Amazon | Profile";
  return (
    <div className="flex  flex-col justify-center items-center p-3">
      <h3>
        <FormattedMessage id="your-profile" />
      </h3>
      <div className=" inline-grid grid-cols-2 mt-2 gap-3 ">
        {profile_elements.map((element) => {
          return (
            <Link
              className="no-underline w-full text-black hover:underline  "
              to={element.pageLink}
            >
              <div className="inline-flex items-center border border-solid border-black p-4 justify-start rounded-sm  h-16 hover:opacity-50 cursor-pointer shadow-sm shadow-black min-w-[170px] max-w-[200px] ">
                <img className="w-[10%]" src={element.imgSrc} alt="" />
                <div className="flex-col items-center ml-3   ">
                  <h4>{element.name[locale]}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
