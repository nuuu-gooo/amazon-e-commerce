import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProductSale } from "@src/@types/types";
import { Link } from "react-router-dom";
import { AuthContext } from "@src/providers/Auth/AuthContext";
import { authStage_EUNM } from "@src/ENUMS/Enums";
import { CiHeart } from "react-icons/ci";
import { useAddWIshListProducts } from "@src/hooks/WishList/useAddWishLIstProducts/useAddWishListProducts";
import { GlobalContext } from "@src/providers/GlobalProvider";

export const SalesProductsComp = ({ saleProducts }: any) => {
  const { AddToWishList } = useAddWIshListProducts();
  const { authStage } = useContext(AuthContext);
  const { AddProductsToCart, cartProductsAdd, cartProductsAddLoading } =
    useContext(GlobalContext);
  console.log(cartProductsAdd, cartProductsAddLoading);

  var settings = {
    dots: true,
    slidesToShow: 3,
    cssEase: "linear",
    appendDots: (dots: string) => (
      <div
        style={{
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
          <div
            key={product.id}
            className=" flex justify-center w-full border-solid border-black p-9 flex-col items-center min-h-[600px]"
          >
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
                </span>
              </p>
            </Link>
            <button
              onClick={() => AddProductsToCart(product.id)}
              className="w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center rounded-r-lg border-none p-2 cursor-pointer hover:opacity-60"
            >
              {cartProductsAddLoading ? "Addding to Cart..." : "Add to Cart"}
            </button>
            {authStage === authStage_EUNM.AUTHORIZED && (
              <button
                onClick={() => {
                  AddToWishList(product.id);
                }}
                className="mt-3 border-none bg-transparent"
              >
                <CiHeart className="text-xl text-[red]" />
                {/* Create a condition here */}
              </button>
            )}
          </div>
        );
      })}
    </Slider>
  );
};
