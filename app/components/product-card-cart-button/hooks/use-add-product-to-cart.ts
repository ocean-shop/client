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
import { getProductDetailsAction } from "@/app/shared/products/actions/get-product-details";
import { resolveProductOfferHelper } from "@/app/shared/products/helpers/resolve-product-offer";
import { PRODUCT_CARD_CART_BUTTON_QUANTITY } from "../constants/product-card-cart-button.constants";

/** Loads the product and adds its default offer to the cart, reporting failures as toasts. */
export const useAddProductToCart = (productId: string, productName: string) => {
  const [isPending, setIsPending] = useState(false);

  const addToCart = async () => {
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
  };

  return { addToCart, isPending };
};
