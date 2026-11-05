"use client";

import { useIsHydrated } from "@/app/core/hooks/use-is-hydrated";
import { readCheckoutPlacedOrderHelper } from "@/app/(pages)/checkout/helpers/read-checkout-placed-order";
import { CheckoutSuccessActions } from "./components/checkout-success-actions/checkout-success-actions";
import { CheckoutSuccessDetails } from "./components/checkout-success-details/checkout-success-details";
import { CheckoutSuccessHeader } from "./components/checkout-success-header/checkout-success-header";
import { CheckoutSuccessMissing } from "./components/checkout-success-missing/checkout-success-missing";
import { CheckoutSuccessSkeleton } from "./components/checkout-success-skeleton/checkout-success-skeleton";
import { CHECKOUT_SUCCESS_CONTENT_CLASS_NAME } from "./constants/checkout-success-view.constants";
import type { CheckoutSuccessViewProps } from "./types/checkout-success-view.types";

export const CheckoutSuccessView = ({ isSignedIn }: CheckoutSuccessViewProps) => {
  const isHydrated = useIsHydrated();
  // The placed order lives in browser storage, which the server render cannot see.
  const order = isHydrated ? readCheckoutPlacedOrderHelper() : null;

  const renderContent = () => {
    if (!isHydrated) return <CheckoutSuccessSkeleton />;
    if (!order) return <CheckoutSuccessMissing />;

    return (
      <>
        <CheckoutSuccessHeader number={order.number} email={order.email} />
        <CheckoutSuccessDetails order={order} />
        <CheckoutSuccessActions isSignedIn={isSignedIn} />
      </>
    );
  };

  return (
    <div className="px-4 pb-14 pt-7 lg:px-10 lg:pb-[72px] lg:pt-14">
      <div className={CHECKOUT_SUCCESS_CONTENT_CLASS_NAME}>{renderContent()}</div>
    </div>
  );
};
