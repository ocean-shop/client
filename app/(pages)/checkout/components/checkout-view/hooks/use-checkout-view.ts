"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { flushSync } from "react-dom";
import { useIsHydrated } from "@/app/core/hooks/use-is-hydrated";
import { localStorageService } from "@/app/core/local-storage/local-storage.service";
import { cartStore } from "@/app/shared/cart/cart-store";
import { calculateCartTotalsHelper } from "@/app/shared/cart/helpers/calculate-cart-totals";
import { useCartItems } from "@/app/shared/cart/hooks/use-cart-items";
import {
  CHECKOUT_DEFAULT_PAYMENT,
  CHECKOUT_PLACED_ORDER_STORAGE_KEY,
  CHECKOUT_SUCCESS_PAGE_PATH,
} from "../../../constants/checkout.constants";
import { buildCheckoutPlacedOrderHelper } from "../../../helpers/build-checkout-placed-order";
import { calculateCheckoutTotalsHelper } from "../../../helpers/calculate-checkout-totals";
import { validateCheckoutFormHelper } from "../../../helpers/validate-checkout-form";
import type {
  CheckoutContact,
  CheckoutDelivery,
  CheckoutOrderDraft,
} from "../../../types/checkout.types";
import { createCheckoutOrderHelper } from "../helpers/create-checkout-order";

/** The form's state, the totals derived from it and placing the order. */
export const useCheckoutView = (
  initialContact: CheckoutContact,
  initialDelivery: CheckoutDelivery
) => {
  const router = useRouter();
  const isHydrated = useIsHydrated();
  const items = useCartItems();
  const [contact, setContact] = useState(initialContact);
  const [delivery, setDelivery] = useState(initialDelivery);
  const [payment, setPayment] = useState(CHECKOUT_DEFAULT_PAYMENT);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlacing, setIsPlacing] = useState(false);
  const [isPlaced, setIsPlaced] = useState(false);

  const cartTotals = calculateCartTotalsHelper(items);
  const totals = calculateCheckoutTotalsHelper(cartTotals, delivery, payment);
  const error = validateCheckoutFormHelper(contact, delivery);

  const placeOrder = async (draft: CheckoutOrderDraft) => {
    setIsPlacing(true);

    const order = await createCheckoutOrderHelper(draft);

    if (!order) {
      setIsPlacing(false);
      return;
    }

    localStorageService.setItem(
      CHECKOUT_PLACED_ORDER_STORAGE_KEY,
      buildCheckoutPlacedOrderHelper(order, draft)
    );
    // Committed before the cart empties, so the page never flashes its empty-cart state.
    flushSync(() => setIsPlaced(true));
    cartStore.clear();
    router.replace(CHECKOUT_SUCCESS_PAGE_PATH);
  };

  const handlePlace = () => {
    setIsSubmitted(true);

    if (error || isPlacing) return;

    placeOrder({ contact, delivery, payment, items, cartTotals, totals });
  };

  return {
    // The cart lives in browser storage, which the server render cannot see.
    isReady: isHydrated && !isPlaced,
    items,
    contact,
    setContact,
    delivery,
    setDelivery,
    payment,
    setPayment,
    cartTotals,
    totals,
    hint: isSubmitted ? error : null,
    isPlacing,
    handlePlace,
  };
};
