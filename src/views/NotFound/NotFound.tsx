import React from "react";
import { Link } from "react-router-dom";
import { dogImagesArr } from "@src/Data/Data";
import SorryText from "src/assets/images/sorry-text-not-found.png";
export const NotFound = () => {
  const randomDogImagNumber = Math.floor(Math.random() * dogImagesArr.length);
  const randomDogImage = dogImagesArr[randomDogImagNumber];
  document.title = "Amazon | 404 ";

  return (
    <div className="flex justify-center items-center h-[80vh] p-9 flex-col">
      <Link to={"/"}>
        <img className="w-full" src={SorryText} alt="" />
      </Link>
      <Link
        className=" overflow-hidden sm:overflow-hidden max-w-full h-auto"
        to={
          "https://www.aboutamazon.com/news/workplace/meet-the-dogs-of-amazon?utm_source=gateway&utm_medium=404"
        }
      >
        <img
          style={{ maxWidth: "100%" }}
          className=""
          src={randomDogImage}
          alt=""
        />
      </Link>
    </div>
  );
};
