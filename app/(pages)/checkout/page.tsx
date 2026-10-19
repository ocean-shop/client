import type { Metadata } from "next";
import { SEO_NO_INDEX_METADATA } from "@/app/shared/seo/constants/seo.constants";
import { CheckoutView } from "./components/checkout-view/checkout-view";
import { CHECKOUT_METADATA_TITLE, CHECKOUT_PAGE_CLASS_NAME } from "./constants/checkout.constants";

export const metadata: Metadata = { ...SEO_NO_INDEX_METADATA, title: CHECKOUT_METADATA_TITLE };

export default function CheckoutPage() {
  return (
    <div className={CHECKOUT_PAGE_CLASS_NAME}>
      <CheckoutView />
    </div>
  );
}
