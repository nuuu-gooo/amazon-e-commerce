import React from "react";
import { Carousel } from "antd";
import { amazonSliderImgs } from "@src/Data/Data";

const ImgCarrousel: React.FC = () => (
  <div className="    bg-gradient-to-b from-transparent via-transparent to-[#E3E6E6]">
    <Carousel className=" absolute">
      {amazonSliderImgs.map((sliderImg, index) => {
        return (
          <div className="" key={index}>
            <img className="w-full" src={sliderImg} alt="" />
          </div>
        );
      })}
    </Carousel>
  </div>
);

export default ImgCarrousel;
