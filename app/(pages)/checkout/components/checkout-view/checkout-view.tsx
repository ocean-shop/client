"use client";

import { cartStore } from "@/app/shared/cart/cart-store";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { getCheckoutCarrierHelper } from "../../helpers/get-checkout-carrier";
import { CheckoutContact } from "./components/checkout-contact/checkout-contact";
import { CheckoutDelivery } from "./components/checkout-delivery/checkout-delivery";
import { CheckoutEmpty } from "./components/checkout-empty/checkout-empty";
import { CheckoutPayment } from "./components/checkout-payment/checkout-payment";
import { CheckoutSkeleton } from "./components/checkout-skeleton/checkout-skeleton";
import { CheckoutSummary } from "./components/checkout-summary/checkout-summary";
import {
  CHECKOUT_BREADCRUMB_ITEMS,
  CHECKOUT_CONTENT_CLASS_NAME,
  CHECKOUT_GRID_CLASS_NAME,
  CHECKOUT_SUMMARY_STICKY_CLASS_NAME,
  CHECKOUT_TITLE,
} from "./constants/checkout-view.constants";
import { useCheckoutView } from "./hooks/use-checkout-view";
import type { CheckoutViewProps } from "./types/checkout-view.types";

export const CheckoutView = ({
  initialContact,
  initialDelivery,
  isSignedIn,
}: CheckoutViewProps) => {
  const {
    isReady,
    items,
    contact,
    setContact,
    delivery,
    setDelivery,
    payment,
    setPayment,
    cartTotals,
    totals,
    hint,
    isPlacing,
    handlePlace,
  } = useCheckoutView(initialContact, initialDelivery);

  const renderContent = () => {
    if (!isReady) return <CheckoutSkeleton />;
    if (items.length === 0) return <CheckoutEmpty />;

    return (
      <div className={CHECKOUT_GRID_CLASS_NAME}>
        <div className="flex flex-col gap-3.5 lg:gap-4">
          <CheckoutContact contact={contact} isSignedIn={isSignedIn} onChange={setContact} />
          <CheckoutDelivery delivery={delivery} onChange={setDelivery} />
          <CheckoutPayment payment={payment} onChange={setPayment} />
        </div>

        <div className={CHECKOUT_SUMMARY_STICKY_CLASS_NAME}>
          <CheckoutSummary
            items={items}
            cartTotals={cartTotals}
            totals={totals}
            carrierLabel={getCheckoutCarrierHelper(delivery.carrier).label}
            hint={hint}
            isPlacing={isPlacing}
            onPlace={handlePlace}
            onEdit={cartStore.open}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={CHECKOUT_CONTENT_CLASS_NAME}>
      <div className="flex flex-col gap-2 px-1 lg:gap-2.5 lg:px-0">
        <Breadcrumb items={CHECKOUT_BREADCRUMB_ITEMS} />
        <h1 className="font-heading text-[21px] font-semibold tracking-[-.025em] text-foreground lg:text-[28px]">
          {CHECKOUT_TITLE}
        </h1>
      </div>

      {renderContent()}
    </div>
  );
};
