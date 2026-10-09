"use client";

import Link from "next/link";
import { useIsHydrated } from "@/app/core/hooks/use-is-hydrated";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { CHECKOUT_PAYMENTS } from "@/app/(pages)/checkout/constants/checkout.constants";
import { formatCheckoutDeliveryAddressHelper } from "@/app/(pages)/checkout/helpers/format-checkout-delivery-address";
import { formatCheckoutDeliveryEstimateHelper } from "@/app/(pages)/checkout/helpers/format-checkout-delivery-estimate";
import { readCheckoutPlacedOrderHelper } from "@/app/(pages)/checkout/helpers/read-checkout-placed-order";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Button } from "@/app/ui/button/button";
import { CheckoutSuccessInfo } from "./components/checkout-success-info/checkout-success-info";
import { CheckoutSuccessItem } from "./components/checkout-success-item/checkout-success-item";
import { CheckoutSuccessMissing } from "./components/checkout-success-missing/checkout-success-missing";
import { CheckoutSuccessSkeleton } from "./components/checkout-success-skeleton/checkout-success-skeleton";
import {
  CHECKOUT_SUCCESS_CONTENT_CLASS_NAME,
  CHECKOUT_SUCCESS_CONTINUE_HREF,
  CHECKOUT_SUCCESS_CONTINUE_LABEL,
  CHECKOUT_SUCCESS_DELIVERY,
  CHECKOUT_SUCCESS_EMAIL_TEXT,
  CHECKOUT_SUCCESS_ESTIMATE,
  CHECKOUT_SUCCESS_NUMBER_LABEL,
  CHECKOUT_SUCCESS_ORDERS_LABEL,
  CHECKOUT_SUCCESS_ORDERS_TOAST_MESSAGE,
  CHECKOUT_SUCCESS_ORDERS_TOAST_TITLE,
  CHECKOUT_SUCCESS_PAYMENT,
  CHECKOUT_SUCCESS_PAYMENT_STATUS,
  CHECKOUT_SUCCESS_TITLE,
  CHECKOUT_SUCCESS_TOTAL_LABEL,
} from "./constants/checkout-success-view.constants";

function showOrdersSoon() {
  toastStore.success(CHECKOUT_SUCCESS_ORDERS_TOAST_TITLE, CHECKOUT_SUCCESS_ORDERS_TOAST_MESSAGE);
}

export function CheckoutSuccessView() {
  const isHydrated = useIsHydrated();
  // The placed order lives in browser storage, which the server render cannot see.
  const order = isHydrated ? readCheckoutPlacedOrderHelper() : null;

  function renderContent() {
    if (!isHydrated) return <CheckoutSuccessSkeleton />;
    if (!order) return <CheckoutSuccessMissing />;

    const deliveryAddress = formatCheckoutDeliveryAddressHelper(order.delivery);
    const paymentLabel =
      CHECKOUT_PAYMENTS.find((option) => option.id === order.payment)?.label ?? "";

    return (
      <>
        <div className="flex flex-col items-center gap-3 text-center lg:gap-3.5">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft lg:h-[76px] lg:w-[76px]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-symbols text-[28px] text-white lg:h-[52px] lg:w-[52px] lg:text-[32px]">
              check
            </span>
          </span>
          <h1 className="text-pretty font-heading text-[22px] font-semibold leading-[1.2] tracking-[-.025em] text-foreground lg:text-[30px]">
            {CHECKOUT_SUCCESS_TITLE}
          </h1>
          <p className="max-w-[460px] text-pretty text-sm leading-[1.55] text-muted lg:text-[15px]">
            {CHECKOUT_SUCCESS_NUMBER_LABEL}{" "}
            <b className="font-semibold text-foreground">#{order.number}</b>
            {CHECKOUT_SUCCESS_EMAIL_TEXT(order.email)}
          </p>
        </div>

        <div className="flex flex-col gap-3.5 rounded-2xl bg-background p-[18px] lg:gap-[18px] lg:p-6">
          <div className="grid gap-3.5 lg:grid-cols-3 lg:gap-5">
            <CheckoutSuccessInfo
              {...CHECKOUT_SUCCESS_DELIVERY}
              value={deliveryAddress.title}
              note={deliveryAddress.address}
            />
            <CheckoutSuccessInfo
              {...CHECKOUT_SUCCESS_ESTIMATE}
              value={formatCheckoutDeliveryEstimateHelper(order.placedAt, order.delivery.carrier)}
            />
            <CheckoutSuccessInfo
              {...CHECKOUT_SUCCESS_PAYMENT}
              value={paymentLabel}
              note={CHECKOUT_SUCCESS_PAYMENT_STATUS[order.payment]}
            />
          </div>

          <div className="flex flex-col border-t border-surface">
            {order.items.map((item) => (
              <CheckoutSuccessItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex items-baseline justify-between">
            <span className="text-[15px] font-semibold text-foreground">
              {CHECKOUT_SUCCESS_TOTAL_LABEL}
            </span>
            <span className="font-heading text-xl font-semibold text-foreground lg:text-[22px]">
              {formatProductPriceHelper(order.total)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:justify-center">
          <Link
            href={CHECKOUT_SUCCESS_CONTINUE_HREF}
            className="inline-flex h-[52px] items-center justify-center rounded-xl bg-accent px-6 text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {CHECKOUT_SUCCESS_CONTINUE_LABEL}
          </Link>
          <Button
            variant="outline"
            size="auto"
            onClick={showOrdersSoon}
            className="h-[52px] rounded-xl px-6 text-[15px]"
          >
            {CHECKOUT_SUCCESS_ORDERS_LABEL}
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="px-4 pb-14 pt-7 lg:px-10 lg:pb-[72px] lg:pt-14">
      <div className={CHECKOUT_SUCCESS_CONTENT_CLASS_NAME}>{renderContent()}</div>
    </div>
  );
}
