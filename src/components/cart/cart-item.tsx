import convertToCurrency from "@/lib/convertToCurrency";
import SVGIconRemoveItem from "../svg/svg-icon-remove-item";

export default function CartItem({
  name,
  price,
  quantity,
  onRemove,
}: Product & { onRemove: () => void }) {
  return (
    <li className="border-b-custom-rose-100 flex items-center justify-between border-b pb-4 text-sm">
      <div className="flex flex-col">
        <h3 className="font-bold">{name}</h3>
        <div className="flex gap-2">
          <span className="text-custom-red font-bold">{quantity}x</span>
          <div className="text-custom-rose-400">
            <span className="pr-0.5 text-xs">@</span>
            {convertToCurrency(price)}
          </div>
          <span className="text-custom-rose-400 font-bold">
            {convertToCurrency(price * quantity)}
          </span>
        </div>
      </div>

      <button
        onClick={onRemove}
        className="fill-custom-rose-400 hover:fill-custom-rose-900 border-custom-rose-400 hover:border-custom-rose-900 cursor-pointer rounded-full border p-0.5 transition-colors"
      >
        <SVGIconRemoveItem />
      </button>
    </li>
  );
}
