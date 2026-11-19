import { getShopSettings } from "@/app/shared/shop-settings/api/get-shop-settings";
import { InfoCard } from "../components/info-card/info-card";
import { InfoFeatureList } from "../components/info-feature-list/info-feature-list";
import { InfoNote } from "../components/info-note/info-note";
import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { INFO_DELIVERY_PATH } from "../constants/info.constants";
import { DeliveryPayments } from "./components/delivery-payments/delivery-payments";
import {
  DELIVERY_LEAD,
  DELIVERY_METHODS,
  DELIVERY_METHODS_TITLE,
  DELIVERY_NOTE,
  DELIVERY_PAYMENTS_TITLE,
  DELIVERY_TITLE,
} from "./constants/delivery.constants";
import { getDeliveryPaymentMethodsHelper } from "./helpers/get-delivery-payment-methods";

export const metadata = buildInfoMetadataHelper(INFO_DELIVERY_PATH, DELIVERY_TITLE, DELIVERY_LEAD);

const DeliveryPage = async () => {
  const { features } = await getShopSettings();

  return (
    <>
      <InfoPageHeader title={DELIVERY_TITLE} lead={DELIVERY_LEAD} />

      <InfoCard title={DELIVERY_METHODS_TITLE}>
        <InfoFeatureList items={DELIVERY_METHODS} />
      </InfoCard>

      <InfoCard title={DELIVERY_PAYMENTS_TITLE}>
        <DeliveryPayments methods={getDeliveryPaymentMethodsHelper(features)} />
      </InfoCard>

      <InfoNote text={DELIVERY_NOTE} />
    </>
  );
};

export default DeliveryPage;
