"use client";

import { useProducts } from "../cart-context/cart-context-provider";
import ItemCard from "./item-card";

export default function ItemsList() {
  const products = useProducts();
  return (
    <div className="@container">
      <h1 className="mb-8 text-4xl font-extrabold">Desserts</h1>
      <ul className="grid gap-6 @sm:grid-cols-2 @lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.name}>
            <ItemCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
