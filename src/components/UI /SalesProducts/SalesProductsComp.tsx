import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProduct, TProductSale } from "@src/@types/types";
import { SingleProduct } from "@src/views/DynamicPages/SingleProduct/SingleProduct";
import { RxHalf1 } from "react-icons/rx";
import { SingleProductComp } from "../SingleProductComp/SingleProductComp";
import { Link } from "react-router-dom";

export const SalesProductsComp = ({ saleProducts }: any) => {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    // autoplay: true,
    dots: true,
    // infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots: string) => (
      <div
        style={{
          // backgroundColor: "#000",
          background: "#febd69",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: string) => (
      <div
        style={{
          width: "100%",
          color: "#febd69",
          background: "black",
          border: "2px black solid",
          borderRadius: "3px",
        }}
      >
        {i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // @ts-ignore
    <Slider className="mt-[1%]" {...settings}>
      {saleProducts.map((product: TProductSale) => {
        return (
          <div className=" flex justify-center w-full border-solid border-black p-9 flex-col items-center min-h-[600px]">
            <Link
              className="no-underline text-[black]"
              to={`/search/${product.title}`}
            >
              <img className="w-[100%] " src={product.image} alt="" />
              <h2 className="mt-3">{product.title}</h2>
              <p className="text-[red]">
                {product.salePrice}$ {""}
                <span className="text-[gray] line-through">
                  {product.price}$
                </span>{" "}
              </p>{" "}
            </Link>
            <button className="w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center rounded-r-lg border-none p-2 cursor-pointer hover:opacity-60">
              Add to Cart
            </button>
          </div>
        );
      })}
    </Slider>
  );
};
