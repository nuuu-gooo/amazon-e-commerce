import React, { useContext, useState } from "react";
import { Button } from "antd";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { FormattedMessage } from "react-intl";
import { TCartItem } from "@src/@types/types";

export const SinglePopOverCartProduct = ({
  product,
}: {
  product: TCartItem;
}) => {
  const [deleteCartProductloading, setDeleteCartProductLoading] =
    useState<boolean>(false);

  const [increaseProductLoadinng, setIncreaseProductLoading] =
    useState<boolean>(false);
  const [decreaseProductLoading, setDecreaseProductLoading] =
    useState<boolean>(false);
  const {
    AddToCart,
    getCartProducts,
    deleteSingleCartProduct,
    deleteCartProducts,
  } = useContext(GlobalContext);
  const handleOnClickDelete = async (id: string) => {
    try {
      setDeleteCartProductLoading(true);
      await deleteCartProducts(id);
    } catch (error: any) {
      setDeleteCartProductLoading(false);
    } finally {
    }
  };

  const handleOnCLickIncrese = async (id: string) => {
    try {
      setIncreaseProductLoading(true);
      await AddToCart(id);
      await getCartProducts();
    } catch (error) {
    } finally {
      setIncreaseProductLoading(false);
    }
  };

  const handleOnCLickDecrease = async (id: string) => {
    try {
      setDecreaseProductLoading(true);
      await deleteSingleCartProduct(id);
      await getCartProducts();
    } catch (error) {
    } finally {
      setDecreaseProductLoading(false);
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
          loading={increaseProductLoadinng}
          onClick={() => handleOnCLickIncrese(product.cartProduct.id)}
        >
          +
        </Button>
        <p className="mr-3 ml-3">{product.count}</p>

        <Button
          loading={decreaseProductLoading}
          onClick={() => handleOnCLickDecrease(product.id)}
        >
          -
        </Button>
      </div>

      <Button
        loading={deleteCartProductloading}
        onClick={() => handleOnClickDelete(product.id)}
        danger={true}
      >
        <FormattedMessage id="delete" />
      </Button>
    </div>
  );
};
