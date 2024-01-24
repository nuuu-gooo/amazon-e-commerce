import React from "react";
import { Carousel } from "antd";
import { amazonSliderImgs } from "@src/Data/Data";

const ImgCarrousel: React.FC = () => (
  <Carousel autoplay className=" relative mb-[10%]">
    {amazonSliderImgs.map((sliderImg, index) => {
      return (
        <div className="overflow-hidden " key={index}>
          <img className="w-full" src={sliderImg} alt="" />
        </div>
      );
    })}
  </Carousel>
);

export default ImgCarrousel;
