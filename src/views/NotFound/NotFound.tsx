import React from "react";
import { Link } from "react-router-dom";
import DogImage from "src/assets/images/dog-image-not-found.jpg";
export const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] flex-col">
      <p className="text-4xl text-center">
        Sorry <br /> we couldn't find that page!
      </p>
      <Link
        className=" overflow-hidden"
        to={
          "https://www.aboutamazon.com/news/workplace/meet-the-dogs-of-amazon?utm_source=gateway&utm_medium=404"
        }
      >
        <img className="min-w-[200px] mt-3" src={DogImage} alt="" />
      </Link>
    </div>
  );
};
