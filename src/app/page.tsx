import Cart from "@/components/cart/cart";
import ItemsList from "@/components/items-list/items-list";

export default function Home() {
  return (
    <main className="my-24 grid min-h-screen gap-4 p-4 sm:grid-cols-[1fr_24em]">
      <ItemsList />
      <Cart />
    </main>
  );
}
