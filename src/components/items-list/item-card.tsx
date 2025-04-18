"use client";

import { useCartDispatch } from "../cart-context/cart-context-provider";
import CartButton from "../cart-button";
import SVGIconAddToCart from "../svg/svg-icon-add-to-cart";
import SVGIconDecrementQuantity from "../svg/svg-icon-decrement-quantity";
import SVGIconIncrementQuantity from "../svg/svg-icon-increment-quantity";
import { ReactNode } from "react";
import ResponsiveImage from "../responsive-image";
import convertToCurrency from "@/lib/convertToCurrency";
import { cn } from "@/lib/utils";

export default function ItemCard({
  image,
  category,
  name,
  price,
  quantity,
}: Product) {
  const dispatch = useCartDispatch();
  return (
    <div>
      <ResponsiveImage
        {...image}
        className={cn(
          "rounded-2xl",
          quantity > 0 && "outline-custom-red outline-2",
        )}
        alt={name}
      />
      {quantity === 0 ? (
        <CartButton
          className="hover:text-custom-red bg-background hover:border-custom-red mx-auto flex -translate-y-1/2 justify-center transition-colors"
          onClick={() => dispatch({ type: "cart_add", name })}
        >
          <SVGIconAddToCart /> Add to Cart
        </CartButton>
      ) : (
        <ItemQuantityControls
          quantity={quantity}
          onIncreaseClick={() =>
            dispatch({ type: "cart_increase_quantity", name })
          }
          onDecreaseClick={() =>
            dispatch({ type: "cart_decrease_quantity", name })
          }
        />
      )}
      <div className="text-foreground/60 text-sm">{category}</div>
      <h2 className="font-bold">{name}</h2>
      <div className="text-custom-red font-bold">
        {convertToCurrency(price)}
      </div>
    </div>
  );
}

function ItemQuantityControls({
  quantity,
  onDecreaseClick,
  onIncreaseClick,
}: {
  quantity: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
}) {
  return (
    <div className="bg-custom-red text-background mx-auto flex w-40 -translate-y-1/2 items-center justify-between rounded-3xl px-3 py-[9px] transition-colors">
      <ItemQuantityControlsButton onClick={onDecreaseClick}>
        <SVGIconDecrementQuantity />
      </ItemQuantityControlsButton>{" "}
      {quantity}{" "}
      <ItemQuantityControlsButton onClick={onIncreaseClick}>
        <SVGIconIncrementQuantity />
      </ItemQuantityControlsButton>
    </div>
  );
}

function ItemQuantityControlsButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="border-background fill-background hover:bg-background group hover:fill-custom-red flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border transition-colors"
    >
      {children}
    </button>
  );
}
