import React from "react";
import { Carousel } from "antd";
import { amazonSliderImgs } from "@src/Data/Data";

export const ImgCarrousel: React.FC = () => (
  <Carousel autoplay={true} className=" relative mb-[8%]">
    {amazonSliderImgs.map((sliderImg, index) => {
      return (
        <div className="overflow-hidden " key={index}>
          <img className="w-full" src={sliderImg} alt="" />
        </div>
      );
    })}
  </Carousel>
);

// export default ImgCarrousel;
