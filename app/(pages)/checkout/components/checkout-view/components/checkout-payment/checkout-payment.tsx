import {
  CHECKOUT_CARD_PAYMENT,
  CHECKOUT_PAYMENTS,
} from "@/app/(pages)/checkout/constants/checkout.constants";
import { CheckoutField } from "../checkout-field/checkout-field";
import { CheckoutOption } from "../checkout-option/checkout-option";
import { CheckoutSection } from "../checkout-section/checkout-section";
import {
  CHECKOUT_PAYMENT_CARD_FIELDS,
  CHECKOUT_PAYMENT_STEP,
  CHECKOUT_PAYMENT_TITLE,
} from "./constants/checkout-payment.constants";
import type { CheckoutPaymentProps } from "./types/checkout-payment.types";

export function CheckoutPayment({ payment, onChange }: CheckoutPaymentProps) {
  return (
    <CheckoutSection step={CHECKOUT_PAYMENT_STEP} title={CHECKOUT_PAYMENT_TITLE}>
      <div role="radiogroup" aria-label={CHECKOUT_PAYMENT_TITLE} className="flex flex-col gap-2">
        {CHECKOUT_PAYMENTS.map((option) => (
          <CheckoutOption
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
                <span className="font-symbols text-xl text-accent">{option.badge}</span>
              ) : (
                <span className="whitespace-nowrap text-xs font-bold">{option.badge}</span>
              )}
            </span>
          </CheckoutOption>
        ))}
      </div>

      {payment === CHECKOUT_CARD_PAYMENT && (
        <div className="grid grid-cols-2 gap-3.5 rounded-xl bg-surface-soft p-4 lg:grid-cols-[2fr_1fr_1fr]">
          <CheckoutField
            {...CHECKOUT_PAYMENT_CARD_FIELDS.number}
            className="col-span-2 lg:col-span-1"
          />
          <CheckoutField {...CHECKOUT_PAYMENT_CARD_FIELDS.expiry} />
          <CheckoutField {...CHECKOUT_PAYMENT_CARD_FIELDS.cvv} />
        </div>
      )}
    </CheckoutSection>
  );
}
