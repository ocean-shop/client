"use client";

import { cartStore } from "@/app/shared/cart/cart-store";
import { useCartItems } from "@/app/shared/cart/hooks/use-cart-items";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_CTA_CLASS_NAME,
  PRODUCT_CTA_STYLES,
} from "@/app/ui/product-card/constants/product-card.constants";
import { getProductCardCartButtonLabelHelper } from "./helpers/get-product-card-cart-button-label";
import { useAddProductToCart } from "./hooks/use-add-product-to-cart";
import type { ProductCardCartButtonProps } from "./types/product-card-cart-button.types";

/**
 * Once any offer of the product is in the cart, the button turns into a shortcut to the cart
 * instead of quietly adding more: a card cannot show which variation it would add next.
 */
export const ProductCardCartButton = ({ productId, productName }: ProductCardCartButtonProps) => {
  const isInCart = useCartItems().some((item) => item.productId === productId);
  const { addToCart, isPending } = useAddProductToCart(productId, productName);

  return (
    <Button
      variant="unstyled"
      size="auto"
      onClick={isInCart ? cartStore.open : addToCart}
      disabled={isPending}
      className={`${PRODUCT_CTA_CLASS_NAME} ${
        isInCart ? PRODUCT_CTA_STYLES.inCart : PRODUCT_CTA_STYLES.default
      }`}
    >
      {getProductCardCartButtonLabelHelper(isPending, isInCart)}
    </Button>
  );
};
