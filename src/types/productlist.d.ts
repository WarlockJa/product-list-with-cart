type ProductImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

type Product = {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

type CartAddItem = {
  type: "cart_add";
  name: string;
};

type CartRemoveItem = {
  type: "cart_remove";
  name: string;
};

type CartIncreaseQuantity = {
  type: "cart_increase_quantity";
  name: string;
};

type CartDecreaseQuantity = {
  type: "cart_decrease_quantity";
  name: string;
};

type CartReset = {
  type: "cart_reset";
};

type CartActions =
  | CartAddItem
  | CartRemoveItem
  | CartIncreaseQuantity
  | CartDecreaseQuantity
  | CartReset;

type CartData = {
  totalCount: number;
  totalPrice: number;
};
