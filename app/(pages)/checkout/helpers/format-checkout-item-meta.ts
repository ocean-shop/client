import type { CartItem } from "@/app/shared/cart/types/cart.types";
import {
  CHECKOUT_ITEM_META_SEPARATOR,
  CHECKOUT_ITEM_QUANTITY_LABEL,
} from "../constants/checkout.constants";

/** Reads "500 мл · 2 шт.", or only the quantity for a product without variations. */
export const formatCheckoutItemMetaHelper = ({ variationLabel, quantity }: CartItem): string => {
  return [variationLabel, CHECKOUT_ITEM_QUANTITY_LABEL(quantity)]
    .filter(Boolean)
    .join(CHECKOUT_ITEM_META_SEPARATOR);
};
