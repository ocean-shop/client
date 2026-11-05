import { NoticeCard } from "@/app/ui/notice-card/notice-card";
import { CHECKOUT_EMPTY_NOTICE } from "./constants/checkout-empty.constants";

export const CheckoutEmpty = () => {
  return <NoticeCard {...CHECKOUT_EMPTY_NOTICE} />;
};
