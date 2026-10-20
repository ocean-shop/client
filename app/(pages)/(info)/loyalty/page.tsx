import { InfoCard } from "../components/info-card/info-card";
import { InfoFeatureList } from "../components/info-feature-list/info-feature-list";
import { InfoNote } from "../components/info-note/info-note";
import { InfoPageHeader } from "../components/info-page-header/info-page-header";
import { buildInfoMetadataHelper } from "../helpers/build-info-metadata";
import { INFO_LOYALTY_PATH } from "../constants/info.constants";
import { LoyaltyTiers } from "./components/loyalty-tiers/loyalty-tiers";
import {
  LOYALTY_EARN_TITLE,
  LOYALTY_EARN_WAYS,
  LOYALTY_LEAD,
  LOYALTY_NOTE,
  LOYALTY_TIERS,
  LOYALTY_TITLE,
} from "./constants/loyalty.constants";

export const metadata = buildInfoMetadataHelper(INFO_LOYALTY_PATH, LOYALTY_TITLE, LOYALTY_LEAD);

const LoyaltyPage = () => {
  return (
    <>
      <InfoPageHeader title={LOYALTY_TITLE} lead={LOYALTY_LEAD} />

      <LoyaltyTiers tiers={LOYALTY_TIERS} />

      <InfoCard title={LOYALTY_EARN_TITLE}>
        <InfoFeatureList items={LOYALTY_EARN_WAYS} />
      </InfoCard>

      <InfoNote text={LOYALTY_NOTE} />
    </>
  );
};

export default LoyaltyPage;
