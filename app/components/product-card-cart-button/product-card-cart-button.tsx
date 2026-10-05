"use client";

import { useState } from "react";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "@/app/shared/cart/cart-store";
import {
  CART_ADD_ERROR_TOAST_MESSAGE,
  CART_ADD_ERROR_TOAST_TITLE,
  CART_UNAVAILABLE_TOAST_MESSAGE,
  CART_UNAVAILABLE_TOAST_TITLE,
} from "@/app/shared/cart/constants/cart.constants";
import { buildCartItemHelper } from "@/app/shared/cart/helpers/build-cart-item";
import { notifyCartItemAddedHelper } from "@/app/shared/cart/helpers/notify-cart-item-added";
import { useCartItems } from "@/app/shared/cart/hooks/use-cart-items";
import { getProductDetailsAction } from "@/app/shared/products/actions/get-product-details";
import { resolveProductOfferHelper } from "@/app/shared/products/helpers/resolve-product-offer";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_CTA_CLASS_NAME,
  PRODUCT_CTA_STYLES,
} from "@/app/ui/product-card/constants/product-card.constants";
import {
  PRODUCT_CARD_CART_BUTTON_ADD_LABEL,
  PRODUCT_CARD_CART_BUTTON_IN_CART_LABEL,
  PRODUCT_CARD_CART_BUTTON_PENDING_LABEL,
  PRODUCT_CARD_CART_BUTTON_QUANTITY,
} from "./constants/product-card-cart-button.constants";
import type { ProductCardCartButtonProps } from "./types/product-card-cart-button.types";

/**
 * Once any offer of the product is in the cart, the button turns into a shortcut to the cart
 * instead of quietly adding more: a card cannot show which variation it would add next.
 */
export function ProductCardCartButton({ productId, productName }: ProductCardCartButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const isInCart = useCartItems().some((item) => item.productId === productId);

  async function addToCart() {
    setIsPending(true);

    try {
      const product = await getProductDetailsAction(productId);

      if (!product) {
        toastStore.error(CART_ADD_ERROR_TOAST_TITLE, CART_ADD_ERROR_TOAST_MESSAGE);
        return;
      }

      // No variation is picked on a card, so the default one goes in, or the first.
      const offer = resolveProductOfferHelper(product);

      if (!offer.available) {
        toastStore.error(CART_UNAVAILABLE_TOAST_TITLE, CART_UNAVAILABLE_TOAST_MESSAGE(productName));
        return;
      }

      cartStore.add(buildCartItemHelper(product, offer), PRODUCT_CARD_CART_BUTTON_QUANTITY);
      notifyCartItemAddedHelper(product.name, PRODUCT_CARD_CART_BUTTON_QUANTITY);
    } catch {
      toastStore.error(CART_ADD_ERROR_TOAST_TITLE, CART_ADD_ERROR_TOAST_MESSAGE);
    } finally {
      setIsPending(false);
    }
  }

  function getLabel() {
    if (isPending) return PRODUCT_CARD_CART_BUTTON_PENDING_LABEL;
    if (isInCart) return PRODUCT_CARD_CART_BUTTON_IN_CART_LABEL;

    return PRODUCT_CARD_CART_BUTTON_ADD_LABEL;
  }

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
      {getLabel()}
    </Button>
  );
}
