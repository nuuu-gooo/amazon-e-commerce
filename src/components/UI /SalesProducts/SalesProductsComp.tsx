import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProduct, TProductSale } from "@src/@types/types";
import { SingleProduct } from "@src/views/DynamicPages/SIngleProduct/SingleProduct";
import { RxHalf1 } from "react-icons/rx";
import { SingleProductComp } from "../SingleProductComp/SingleProductComp";

export const SalesProductsComp = ({ saleProducts }: any) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <div className=" ">
      <h1>Sales: </h1>
      <Slider className="mt-[1%]" {...settings}>
        {saleProducts.map((product: TProductSale) => {
          return (
            <div className=" flex w-full border-solid border-black p-9 mr-3 flex-col items-center">
              <img className="w-[100%]" src={product.image} alt="" />
              <h2>{product.title}</h2>
              <p>{product.price} $</p>{" "}
              <p className="text-[red]">For Sale {product.salePrice}$ </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 mt-3 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-yellow w-full">
                Add to Cart
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
