export default function cartDispatch(
  products: Product[],
  action: CartActions,
): Product[] {
  switch (action.type) {
    case "cart_add":
      return products.map((item) =>
        item.name === action.name
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "cart_remove":
      return products.map((item) =>
        item.name === action.name ? { ...item, quantity: 0 } : item,
      );

    case "cart_increase_quantity":
      return products.map((item) =>
        item.name === action.name
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "cart_decrease_quantity":
      return products.map((item) =>
        item.name === action.name
          ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
          : item,
      );

    case "cart_reset": {
      return products.map((item) => ({ ...item, quantity: 0 }));
    }

    default:
      throw "Unrecognised action";
  }
}
