import type { Metadata } from "next";
import { SEO_NO_INDEX_METADATA } from "@/app/shared/seo/constants/seo.constants";
import {
  CHECKOUT_PAGE_CLASS_NAME,
  CHECKOUT_SUCCESS_METADATA_TITLE,
} from "../constants/checkout.constants";
import { CheckoutSuccessView } from "./components/checkout-success-view/checkout-success-view";

export const metadata: Metadata = {
  ...SEO_NO_INDEX_METADATA,
  title: CHECKOUT_SUCCESS_METADATA_TITLE,
};

export default function CheckoutSuccessPage() {
  return (
    <div className={CHECKOUT_PAGE_CLASS_NAME}>
      <CheckoutSuccessView />
    </div>
  );
}
