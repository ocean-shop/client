import type { CartItem } from "@/app/shared/cart/types/cart.types";

export type CartModalItemMediaProps = {
  href: string;
  name: string;
  image: CartItem["image"];
  discountPercent: number | undefined;
  onNavigate: () => void;
};
