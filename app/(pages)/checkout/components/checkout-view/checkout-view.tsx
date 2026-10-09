"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { flushSync } from "react-dom";
import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { useIsHydrated } from "@/app/core/hooks/use-is-hydrated";
import { localStorageService } from "@/app/core/local-storage/local-storage.service";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "@/app/shared/cart/cart-store";
import { calculateCartTotalsHelper } from "@/app/shared/cart/helpers/calculate-cart-totals";
import { useCartItems } from "@/app/shared/cart/hooks/use-cart-items";
import { createOrderAction } from "@/app/shared/orders/actions/create-order";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";
import {
  CHECKOUT_DEFAULT_DELIVERY,
  CHECKOUT_DEFAULT_PAYMENT,
  CHECKOUT_EMPTY_CONTACT,
  CHECKOUT_ORDER_ERROR_TOAST_TITLE,
  CHECKOUT_PLACED_ORDER_STORAGE_KEY,
  CHECKOUT_SUCCESS_PAGE_PATH,
} from "../../constants/checkout.constants";
import { buildCheckoutOrderHelper } from "../../helpers/build-checkout-order";
import { buildCheckoutPlacedOrderHelper } from "../../helpers/build-checkout-placed-order";
import { calculateCheckoutTotalsHelper } from "../../helpers/calculate-checkout-totals";
import { getCheckoutCarrierHelper } from "../../helpers/get-checkout-carrier";
import { validateCheckoutFormHelper } from "../../helpers/validate-checkout-form";
import type { CheckoutOrderDraft } from "../../types/checkout.types";
import { CheckoutContact } from "./components/checkout-contact/checkout-contact";
import { CheckoutDelivery } from "./components/checkout-delivery/checkout-delivery";
import { CheckoutEmpty } from "./components/checkout-empty/checkout-empty";
import { CheckoutPayment } from "./components/checkout-payment/checkout-payment";
import { CheckoutSkeleton } from "./components/checkout-skeleton/checkout-skeleton";
import { CheckoutSummary } from "./components/checkout-summary/checkout-summary";
import {
  CHECKOUT_BREADCRUMB_CART_LABEL,
  CHECKOUT_BREADCRUMB_CURRENT_ITEM,
  CHECKOUT_BREADCRUMB_HOME_ITEM,
  CHECKOUT_CONTENT_CLASS_NAME,
  CHECKOUT_GRID_CLASS_NAME,
  CHECKOUT_SUMMARY_STICKY_CLASS_NAME,
  CHECKOUT_TITLE,
} from "./constants/checkout-view.constants";

/** The cart has no page of its own, so its breadcrumb step opens the cart modal instead. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  CHECKOUT_BREADCRUMB_HOME_ITEM,
  { label: CHECKOUT_BREADCRUMB_CART_LABEL, onClick: cartStore.open },
  CHECKOUT_BREADCRUMB_CURRENT_ITEM,
];

export function CheckoutView() {
  const router = useRouter();
  const isHydrated = useIsHydrated();
  const items = useCartItems();
  const [contact, setContact] = useState(CHECKOUT_EMPTY_CONTACT);
  const [delivery, setDelivery] = useState(CHECKOUT_DEFAULT_DELIVERY);
  const [payment, setPayment] = useState(CHECKOUT_DEFAULT_PAYMENT);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlacing, setIsPlacing] = useState(false);
  const [isPlaced, setIsPlaced] = useState(false);

  const cartTotals = calculateCartTotalsHelper(items);
  const totals = calculateCheckoutTotalsHelper(cartTotals, delivery, payment);
  const error = validateCheckoutFormHelper(contact, delivery);

  async function placeOrder(draft: CheckoutOrderDraft) {
    setIsPlacing(true);

    try {
      const result = await createOrderAction(buildCheckoutOrderHelper(draft));

      if (!result.ok) {
        toastStore.error(
          CHECKOUT_ORDER_ERROR_TOAST_TITLE,
          API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE
        );
        setIsPlacing(false);
        return;
      }

      localStorageService.setItem(
        CHECKOUT_PLACED_ORDER_STORAGE_KEY,
        buildCheckoutPlacedOrderHelper(result.order, draft)
      );
      // Committed before the cart empties, so the page never flashes its empty-cart state.
      flushSync(() => setIsPlaced(true));
      cartStore.clear();
      router.replace(CHECKOUT_SUCCESS_PAGE_PATH);
    } catch {
      toastStore.error(CHECKOUT_ORDER_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
      setIsPlacing(false);
    }
  }

  function handlePlace() {
    setIsSubmitted(true);

    if (error || isPlacing) return;

    placeOrder({ contact, delivery, payment, items, cartTotals, totals });
  }

  function renderContent() {
    // The cart lives in browser storage, which the server render cannot see.
    if (!isHydrated || isPlaced) return <CheckoutSkeleton />;
    if (items.length === 0) return <CheckoutEmpty />;

    return (
      <div className={CHECKOUT_GRID_CLASS_NAME}>
        <div className="flex flex-col gap-3.5 lg:gap-4">
          <CheckoutContact contact={contact} onChange={setContact} />
          <CheckoutDelivery delivery={delivery} onChange={setDelivery} />
          <CheckoutPayment payment={payment} onChange={setPayment} />
        </div>

        <div className={CHECKOUT_SUMMARY_STICKY_CLASS_NAME}>
          <CheckoutSummary
            items={items}
            cartTotals={cartTotals}
            totals={totals}
            carrierLabel={getCheckoutCarrierHelper(delivery.carrier).label}
            hint={isSubmitted ? error : null}
            isPlacing={isPlacing}
            onPlace={handlePlace}
            onEdit={cartStore.open}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={CHECKOUT_CONTENT_CLASS_NAME}>
      <div className="flex flex-col gap-2 px-1 lg:gap-2.5 lg:px-0">
        <Breadcrumb items={BREADCRUMB_ITEMS} />
        <h1 className="font-heading text-[21px] font-semibold tracking-[-.025em] text-foreground lg:text-[28px]">
          {CHECKOUT_TITLE}
        </h1>
      </div>

      {renderContent()}
    </div>
  );
}
