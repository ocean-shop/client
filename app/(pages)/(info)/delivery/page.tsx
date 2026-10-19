import { InfoCard } from "../components/info-card/info-card";
import { InfoFeatureList } from "../components/info-feature-list/info-feature-list";
import { InfoNote } from "../components/info-note/info-note";
import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { DeliveryPayments } from "./components/delivery-payments/delivery-payments";
import {
  DELIVERY_LEAD,
  DELIVERY_METHODS,
  DELIVERY_METHODS_TITLE,
  DELIVERY_NOTE,
  DELIVERY_PAYMENT_METHODS,
  DELIVERY_PAYMENTS_TITLE,
  DELIVERY_TITLE,
} from "./constants/delivery.constants";

export const metadata = buildInfoMetadataHelper(DELIVERY_TITLE, DELIVERY_LEAD);

export default function DeliveryPage() {
  return (
    <>
      <InfoPageHeader title={DELIVERY_TITLE} lead={DELIVERY_LEAD} />

      <InfoCard title={DELIVERY_METHODS_TITLE}>
        <InfoFeatureList items={DELIVERY_METHODS} />
      </InfoCard>

      <InfoCard title={DELIVERY_PAYMENTS_TITLE}>
        <DeliveryPayments methods={DELIVERY_PAYMENT_METHODS} />
      </InfoCard>

      <InfoNote text={DELIVERY_NOTE} />
    </>
  );
}
