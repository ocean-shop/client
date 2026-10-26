import type { Metadata } from "next";
import { getUserShippings } from "@/app/(pages)/cabinet/(pages)/addresses/api/get-user-shippings";
import { getUserProfile } from "@/app/(pages)/cabinet/(pages)/profile/api/get-user-profile";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { SEO_NO_INDEX_METADATA } from "@/app/shared/seo/constants/seo.constants";
import { CheckoutView } from "./components/checkout-view/checkout-view";
import {
  CHECKOUT_DEFAULT_DELIVERY,
  CHECKOUT_METADATA_TITLE,
  CHECKOUT_PAGE_CLASS_NAME,
} from "./constants/checkout.constants";
import { buildCheckoutContactHelper } from "./helpers/build-checkout-contact";
import { resolveCheckoutDeliveryHelper } from "./helpers/resolve-checkout-delivery";

export const metadata: Metadata = { ...SEO_NO_INDEX_METADATA, title: CHECKOUT_METADATA_TITLE };

const CheckoutPage = async () => {
  const user = await getAuthUser();
  // Prefilling is a convenience, so a failed lookup leaves the form blank instead of breaking it.
  const [profile, delivery] = user
    ? await Promise.all([
        getUserProfile(user.id).catch(() => null),
        getUserShippings(user.id)
          .catch(() => [])
          .then(resolveCheckoutDeliveryHelper),
      ])
    : [null, CHECKOUT_DEFAULT_DELIVERY];

  return (
    <div className={CHECKOUT_PAGE_CLASS_NAME}>
      <CheckoutView
        initialContact={buildCheckoutContactHelper(user, profile)}
        initialDelivery={delivery}
        isSignedIn={Boolean(user)}
      />
    </div>
  );
};

export default CheckoutPage;
