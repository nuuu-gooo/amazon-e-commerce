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
          borderRadius: "100%",
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
          background: "black",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    // @ts-ignore
    <Slider className="mt-[1%] " {...settings}>
      {saleProducts.map((product: TProductSale) => {
        return (
          <div
            key={product.id}
            className=" flex justify-center w-full border-solid border-black p-9 flex-col items-center h-full"
          >
            <Link
              className="no-underline text-[black]"
              to={`/search/${product.title}`}
            >
              <img
                className="w-[50%] aspect-square  "
                src={product.image}
                alt=""
              />
              <h2 className="mt-3">{product.title}</h2>
              <p className="text-[red]">
                {product.salePrice}$ {""}
                <span className="text-[gray] line-through">
                  {product.price}$
                </span>
              </p>
            </Link>
            {authStage === authStage_EUNM.AUTHORIZED ? (
              <button
                onClick={() => AddToCart(product.id)}
                className="w-[100%] mt-5 rounded-b-lg min-w-9 bg-[#febd69] flex items-center justify-center  border-none p-2 cursor-pointer hover:opacity-60"
              >
                Add To Cart
                {/* {cartProductsAddLoading ? "Addding to Cart..." : "Add to Cart"} */}
              </button>
            ) : (
              ""
            )}

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
