import { profile_elements } from "@src/Data/Data";
import { Link } from "react-router-dom";
export const Profile = () => {
  return (
    <div className="flex  flex-col w-[70%] m-auto p-3">
      <h2>Your Profile</h2>
      <div className=" inline-grid grid-cols-2 mt-2">
        {profile_elements.map((element) => {
          return (
            <Link
              className="no-underline w-full text-black hover:underline  "
              to={element.pageLink}
            >
              <div className="inline-flex items-center border border-solid border-black p-4 justify-start rounded-sm  h-16 hover:opacity-50 cursor-pointer shadow-sm shadow-black">
                <img className="w-[10%]" src={element.imgSrc} alt="" />
                <div className="flex-col items-center ml-3 ">
                  <h4>{element.name}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
