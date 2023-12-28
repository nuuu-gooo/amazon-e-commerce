import React from "react";
import { Link } from "react-router-dom";
import { dogImagesArr } from "@src/Data/Data";
export const NotFound = () => {
  const randomDogImagNumber = Math.floor(Math.random() * dogImagesArr.length);
  const randomDogImage = dogImagesArr[randomDogImagNumber];

  return (
    <div className="flex justify-center items-center h-[70vh] p-3 flex-col">
      <p className="text-4xl text-center mb-9">
        Sorry <br /> we couldn't find that page!
      </p>
      <Link
        className=" overflow-hidden sm:overflow-hidden max-w-full"
        to={
          "https://www.aboutamazon.com/news/workplace/meet-the-dogs-of-amazon?utm_source=gateway&utm_medium=404"
        }
      >
        <img className="" src={randomDogImage} alt="" />
      </Link>
    </div>
  );
};
