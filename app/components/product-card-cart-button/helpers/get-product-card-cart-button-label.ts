import {
  PRODUCT_CARD_CART_BUTTON_ADD_LABEL,
  PRODUCT_CARD_CART_BUTTON_IN_CART_LABEL,
  PRODUCT_CARD_CART_BUTTON_PENDING_LABEL,
} from "../constants/product-card-cart-button.constants";

export const getProductCardCartButtonLabelHelper = (
  isPending: boolean,
  isInCart: boolean
): string => {
  if (isPending) return PRODUCT_CARD_CART_BUTTON_PENDING_LABEL;
  if (isInCart) return PRODUCT_CARD_CART_BUTTON_IN_CART_LABEL;

  return PRODUCT_CARD_CART_BUTTON_ADD_LABEL;
};
