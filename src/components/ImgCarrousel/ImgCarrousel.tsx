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
  <div className="relative">
    <Carousel autoplay>
      {amazonSliderImgs.map((sliderImg) => {
        return (
          <div>
            <img style={contentStyle} src={sliderImg} alt="" />
          </div>
        );
      })}
    </Carousel>
  </div>
);

export default ImgCarrousel;
