import convertToCurrency from "@/lib/convertToCurrency";
import ResponsiveImage from "../responsive-image";

export default function CartItemConfirm({
  name,
  price,
  quantity,
  image,
}: Product) {
  return (
    <li className="flex items-center justify-between border-b border-b-rose-100 pb-4 text-sm">
      <div className="flex gap-2">
        <ResponsiveImage
          alt={name}
          {...image}
          className="aspect-square w-12 rounded-sm"
        />
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <div className="flex gap-2">
            <span className="text-custom-red font-bold">{quantity}x</span>
            <div className="text-custom-rose-400">
              <span className="pr-0.5 text-xs">@</span>
              {convertToCurrency(price)}
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg">{convertToCurrency(price * quantity)}</div>
    </li>
  );
}
