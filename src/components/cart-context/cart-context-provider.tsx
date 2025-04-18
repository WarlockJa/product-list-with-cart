"use client";

import productsData from "@/lib/data.json";
import { createContext, ReactNode, useContext, useReducer } from "react";
import cartDispatch from "./cart-dispatch";

// extending data from json with quantity with default value 0
const ProductsContext = createContext<Product[] | null>(null);
const DispatchContext = createContext<((action: CartActions) => void) | null>(
  null,
);

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, dispatch] = useReducer(
    cartDispatch,
    productsData.map((item) => ({ ...item, quantity: 0 })),
  );

  return (
    <ProductsContext.Provider value={products}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const products = useContext(ProductsContext);

  if (products === null) {
    throw "Must be used inside CartContextProvider";
  }

  return products;
}

export function useCartDispatch() {
  const dispatch = useContext(DispatchContext);

  if (dispatch === null) {
    throw "Must be used inside CartContextProvider";
  }

  return dispatch;
}
