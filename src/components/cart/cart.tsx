"use client";

import {
  useCartDispatch,
  useProducts,
} from "@/components/cart-context/cart-context-provider";
import convertToCurrency from "@/lib/convertToCurrency";
import SVGIconCarbonNeutral from "../svg/svg-icon-carbon-neutral";
import CartButton from "../cart-button";
import SVGIllustrationEmptyCart from "../svg/svg-illustration-empty-cart";
import CartItem from "./cart-item";
import { useState } from "react";
import OrderConfirmationModal from "./order-confirmation-modal";

export default function Cart() {
  const products = useProducts();
  const dispatch = useCartDispatch();

  const [isShowModal, setIsShowModal] = useState(false);

  const cartProducts = products.filter((item) => item.quantity > 0);

  const total = cartProducts.reduce(
    (sum, cur) => {
      sum.totalCount += cur.quantity;
      sum.totalPrice += cur.price * cur.quantity;
      return sum;
    },
    { totalCount: 0, totalPrice: 0 } as CartData,
  );

  return (
    <div className="h-fit space-y-6 rounded-2xl bg-white p-6">
      <h2 className="text-custom-red text-2xl font-extrabold">
        Your Cart ({total.totalCount > 0 ? total.totalCount : "O"})
      </h2>
      {total.totalCount > 0 ? (
        <>
          <ul className="space-y-4">
            {cartProducts.map((product) => (
              <CartItem
                key={product.name}
                {...product}
                onRemove={() =>
                  dispatch({ type: "cart_remove", name: product.name })
                }
              />
            ))}
          </ul>
          <div className="text-foreground/60 flex items-center justify-between text-sm">
            Order Total
            <span className="text-foreground text-2xl font-extrabold">
              {convertToCurrency(total.totalPrice)}
            </span>
          </div>
          <div className="bg-background flex w-full justify-center gap-1 rounded-lg p-4 text-sm">
            <SVGIconCarbonNeutral className="fill-custom-green" /> This is a
            <b>carbon-neutral</b> delivery
          </div>
          <CartButton
            onClick={() => setIsShowModal(true)}
            className="bg-custom-red hover:bg-custom-red/90 text-background w-full justify-center border-none p-3.5"
          >
            Confirm Order
          </CartButton>
          {isShowModal && (
            <OrderConfirmationModal
              onNewOrderClick={() => {
                dispatch({ type: "cart_reset" });
                setIsShowModal(false);
              }}
            />
          )}
        </>
      ) : (
        <div className="text-custom-rose-500 mt-8 flex flex-col items-center">
          <SVGIllustrationEmptyCart />
          <p className="my-4 text-sm font-bold">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
}
