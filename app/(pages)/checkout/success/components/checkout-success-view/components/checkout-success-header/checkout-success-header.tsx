import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  CHECKOUT_SUCCESS_EMAIL_TEXT,
  CHECKOUT_SUCCESS_NUMBER_LABEL,
  CHECKOUT_SUCCESS_TITLE,
} from "./constants/checkout-success-header.constants";
import type { CheckoutSuccessHeaderProps } from "./types/checkout-success-header.types";

export const CheckoutSuccessHeader = ({ number, email }: CheckoutSuccessHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center lg:gap-3.5">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft lg:h-[76px] lg:w-[76px]">
        <MaterialIcon
          name="check"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[28px] text-white lg:h-[52px] lg:w-[52px] lg:text-[32px]"
        />
      </span>
      <h1 className="text-pretty font-heading text-[22px] font-semibold leading-[1.2] tracking-[-.025em] text-foreground lg:text-[30px]">
        {CHECKOUT_SUCCESS_TITLE}
      </h1>
      <p className="max-w-[460px] text-pretty text-sm leading-[1.55] text-muted lg:text-[15px]">
        {CHECKOUT_SUCCESS_NUMBER_LABEL} <b className="font-semibold text-foreground">#{number}</b>
        {CHECKOUT_SUCCESS_EMAIL_TEXT(email)}
      </p>
    </div>
  );
};
