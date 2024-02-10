import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import Slider from "react-slick";
import { GlobalContext } from "@src/providers/GlobalProvider";

export const SectionSlider = ({ data }: any) => {
  const { authStage } = useContext(AuthContext);
  const { AddToCart } = useContext(GlobalContext);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          fontSize: "100%",
          background: "transparent",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infiite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider
      className=" shadow shadow-black border border-solid border-black"
      {...settings}
    >
      {data.map((product: any) => {
        return (
          <div
            key={product.id}
            className="   bg-[white] flex  rounded-md justify-center   p-9   flex-col items-center   "
          >
            <Link
              className="no-underline text-[black]"
              to={`/search/${product.title}`}
            >
              <img
                className="w-[50%] aspect-square object-contain "
                src={product.image}
                alt=""
              />
              {/* <h2 className="mt-3">{product.title}</h2>
              <p className="text-[red] text-xl">
                {product?.price}$ {""}
              </p> */}
            </Link>
            {/* {authStage === authStage_EUNM.AUTHORIZED ? (
              <button
                onClick={() => AddToCart(product.id)}
                className="w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center rounded-r-lg border-none p-2 cursor-pointer hover:opacity-60"
              >
                Add To Cart
              </button>
            ) : (
              ""
            )} */}

            {authStage === authStage_EUNM.AUTHORIZED && (
              <button className="mt-3 border-none bg-transparent"></button>
            )}
          </div>
        );
      })}
    </Slider>
  );
};
