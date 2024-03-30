import { Button } from "antd";

import { useContext, useState } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { TCartItem, TCategoryProducts, TProduct } from "@src/@types/types";

export const SinglePopOverCartProduct = ({
  product,
}: {
  product: TCartItem;
}) => {
  const [deleteCartProductloading, setDeleteCartProductLoading] =
    useState<boolean>(false);

  console.log(product);
  const {
    AddToCart,
    getCartProducts,
    deleteSingleCartProduct,
    deleteCartProducts,
  } = useContext(GlobalContext);
  const handleOnClick = async (id: string) => {
    try {
      setDeleteCartProductLoading(true);
      await deleteCartProducts(id);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setDeleteCartProductLoading(false);
    }
  };

  return (
    <div className="flex justify-between p-2 items-center border border-solid rounded-t-lg ">
      <div className="left flex items-center ">
        <h3>{product.cartProduct.title}</h3>
        <img className="w-[4%] ml-3" src={product.cartProduct.image} alt="" />
      </div>
      <div className="quantity flex items-center">
        <Button
          onClick={() => {
            AddToCart(product.cartProduct.id), getCartProducts();
          }}
        >
          +
        </Button>
        <p className="mr-3 ml-3">{product.count}</p>
        <Button onClick={() => deleteSingleCartProduct(product.id)}>-</Button>
      </div>

      <Button
        loading={deleteCartProductloading}
        onClick={() => handleOnClick(product.id)}
        danger={true}
      >
        <FormattedMessage id="delete" />
      </Button>
    </div>
  );
};
