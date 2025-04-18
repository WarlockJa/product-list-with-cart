import { cn } from "@/lib/utils";

export default function CartButton({
  className,
  ...props
}: React.ComponentProps<"button"> & { className?: string }) {
  return (
    <button
      className={cn(
        "border-foreground flex w-40 cursor-pointer gap-1.5 rounded-3xl border p-2.5 text-sm font-bold",
        className,
      )}
      {...props}
    />
  );
}
