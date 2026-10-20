import type { Metadata } from "next";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
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

const CheckoutSuccessPage = async () => {
  const user = await getAuthUser();

  return (
    <div className={CHECKOUT_PAGE_CLASS_NAME}>
      <CheckoutSuccessView isSignedIn={Boolean(user)} />
    </div>
  );
};

export default CheckoutSuccessPage;
