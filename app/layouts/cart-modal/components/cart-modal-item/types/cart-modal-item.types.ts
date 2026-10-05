import type { CartItem } from "@/app/shared/cart/types/cart.types";

export type CartModalItemProps = {
  item: CartItem;
  /** Following the product link leaves the modal open over the new page unless it closes. */
  onNavigate: () => void;
};
