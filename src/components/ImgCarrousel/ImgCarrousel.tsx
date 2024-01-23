import React from "react";
import { Carousel } from "antd";
import { amazonSliderImgs } from "@src/Data/Data";

const contentStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  width: "100%",
  background: "#364d79",
};

const ImgCarrousel: React.FC = () => (
  <div className="relative w-full h-full top-0 bg-gradient-to-b from-transparent via-transparent to-[#E3E6E6]">
    <Carousel autoplay>
      {amazonSliderImgs.map((sliderImg, index) => {
        return (
          <div key={index}>
            <img style={contentStyle} src={sliderImg} alt="" />
          </div>
        );
      })}
    </Carousel>
  </div>
);

export default ImgCarrousel;
