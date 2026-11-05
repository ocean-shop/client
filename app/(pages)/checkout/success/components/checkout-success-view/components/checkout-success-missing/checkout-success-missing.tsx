import { NoticeCard } from "@/app/ui/notice-card/notice-card";
import { CHECKOUT_SUCCESS_MISSING_NOTICE } from "./constants/checkout-success-missing.constants";

/** Shown when the page is opened directly, without an order placed in this browser. */
export const CheckoutSuccessMissing = () => {
  return <NoticeCard {...CHECKOUT_SUCCESS_MISSING_NOTICE} />;
};
