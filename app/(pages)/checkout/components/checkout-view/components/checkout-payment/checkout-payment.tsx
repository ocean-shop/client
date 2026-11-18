import { getCheckoutAvailablePaymentsHelper } from "@/app/(pages)/checkout/helpers/get-checkout-available-payments";
import { useShopFeatures } from "@/app/shared/shop-settings/hooks/use-shop-features";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { RadioCard } from "@/app/ui/radio-card/radio-card";
import { CheckoutSection } from "../checkout-section/checkout-section";
import {
  CHECKOUT_PAYMENT_STEP,
  CHECKOUT_PAYMENT_TITLE,
} from "./constants/checkout-payment.constants";
import type { CheckoutPaymentProps } from "./types/checkout-payment.types";

export const CheckoutPayment = ({ payment, onChange }: CheckoutPaymentProps) => {
  const payments = getCheckoutAvailablePaymentsHelper(useShopFeatures());

  return (
    <CheckoutSection step={CHECKOUT_PAYMENT_STEP} title={CHECKOUT_PAYMENT_TITLE}>
      <div role="radiogroup" aria-label={CHECKOUT_PAYMENT_TITLE} className="flex flex-col gap-2">
        {payments.map((option) => (
          <RadioCard
            key={option.id}
            isSelected={option.id === payment}
            onSelect={() => onChange(option.id)}
            className="items-center px-3.5 py-3"
          >
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-[14.5px] font-semibold">{option.label}</span>
              <span className="text-[12.5px] text-muted-light">{option.note}</span>
            </span>

            <span className="flex h-8 min-w-[52px] flex-none items-center justify-center rounded-lg border border-border-soft bg-background px-2 text-foreground lg:min-w-[60px]">
              {option.badgeType === "icon" ? (
                <MaterialIcon name={option.badge} className="text-xl text-accent" />
              ) : (
                <span className="whitespace-nowrap text-xs font-bold">{option.badge}</span>
              )}
            </span>
          </RadioCard>
        ))}
      </div>
    </CheckoutSection>
  );
};
