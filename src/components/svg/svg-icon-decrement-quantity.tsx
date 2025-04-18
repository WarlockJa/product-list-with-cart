import { SVGProps } from "react";

export default function SVGIconDecrementQuantity(
  props: SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      {...props}
      viewBox="0 0 10 2"
    >
      <path fill="current" d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
}
