import Link from "next/link";
import {
  CHECKOUT_SUCCESS_MISSING_ICON,
  CHECKOUT_SUCCESS_MISSING_LINK_HREF,
  CHECKOUT_SUCCESS_MISSING_LINK_LABEL,
  CHECKOUT_SUCCESS_MISSING_TEXT,
  CHECKOUT_SUCCESS_MISSING_TITLE,
} from "./constants/checkout-success-missing.constants";

/** Shown when the page is opened directly, without an order placed in this browser. */
export function CheckoutSuccessMissing() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-background px-6 py-14 text-center">
      <span className="font-symbols text-[40px] text-muted-light">
        {CHECKOUT_SUCCESS_MISSING_ICON}
      </span>
      <span className="font-heading text-lg font-semibold text-foreground">
        {CHECKOUT_SUCCESS_MISSING_TITLE}
      </span>
      <span className="text-[14.5px] text-muted">{CHECKOUT_SUCCESS_MISSING_TEXT}</span>
      <Link
        href={CHECKOUT_SUCCESS_MISSING_LINK_HREF}
        className="mt-2 inline-flex h-[50px] items-center justify-center gap-2 rounded-[10px] bg-accent px-[26px] text-[15px] font-semibold text-white hover:bg-accent-dark"
      >
        {CHECKOUT_SUCCESS_MISSING_LINK_LABEL}
        <span className="font-symbols text-[19px]">arrow_forward</span>
      </Link>
    </div>
  );
}
