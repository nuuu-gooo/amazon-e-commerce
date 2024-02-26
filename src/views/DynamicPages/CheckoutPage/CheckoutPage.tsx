import PaymentForm from "@src/components/UI /PaymentForm/CreditCard";
import React, { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { SingleCartItem } from "../Cart/SingleCartItem";
import { Button } from "antd";

export const CheckoutPage = () => {
  const {
    allCartProducts,
    totalCartPrice,
    buyRequest,
    totalCartItems,
    purchaseLoading,
    transaction,
  } = useContext(GlobalContext);

  document.title = "Amazon | Checkout";
  return (
    <div className="flex justify-center items-center p-8">
      <div className="container flex justify-center items-center flex-col">
        <h1 className=" mb-3">Checkout</h1>
        <PaymentForm />
        <div>
          <h1 className="mb-2">Your Cart </h1>
          <div className="border border-solid  border-[#febd69] bg-[#febd69]  p-5 rounded-l">
            {allCartProducts.map((product) => {
              return <SingleCartItem data={product} />;
            })}
          </div>
          <div className="flex justify-center items-center flex-col mt-3">
            <p>
              Total:
              <span className="text-[red] text-2xl">${totalCartPrice}</span>
            </p>
          </div>
        </div>
        <Button
          disabled={transaction === false}
          loading={purchaseLoading}
          onClick={() => buyRequest(totalCartPrice, totalCartItems)}
          className="mt-7 p-3 bg-green-400 text-black border-none  rounded-sm hover: shadow-sm shadow-green-400 flex justify-center items-center"
        >
          Purchase Now
        </Button>
      </div>
    </div>
  );
};
