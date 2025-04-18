"use client";

import convertToCurrency from "@/lib/convertToCurrency";
import { useProducts } from "../cart-context/cart-context-provider";
import CartButton from "../cart-button";
import SVGIconOrderConfirmed from "../svg/svg-icon-order-confirmed";
import CartItemConfirm from "./cart-item-confirm";

export default function OrderConfirmationModal({
  onNewOrderClick,
}: {
  onNewOrderClick: () => void;
}) {
  const products = useProducts();

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="flex w-screen max-w-lg flex-col space-y-4 rounded-2xl bg-white p-10">
        <SVGIconOrderConfirmed />
        <h2 className="text-4xl font-extrabold">Order Confirmed</h2>
        <p className="text-foreground/60 text-sm font-bold">
          We hope you enjoy your food!
        </p>
        <ul className="bg-background space-y-4 p-6">
          {cartProducts.map((product) => (
            <CartItemConfirm key={product.name} {...product} />
          ))}
          <li className="text-foreground/60 flex items-center justify-between text-sm">
            Order Total
            <span className="text-foreground text-2xl font-extrabold">
              {convertToCurrency(total.totalPrice)}
            </span>
          </li>
        </ul>

        <CartButton
          onClick={onNewOrderClick}
          className="bg-custom-red hover:bg-custom-red/90 text-background w-full justify-center border-none p-3.5"
        >
          Start New Order
        </CartButton>
      </div>
    </div>
  );
}
