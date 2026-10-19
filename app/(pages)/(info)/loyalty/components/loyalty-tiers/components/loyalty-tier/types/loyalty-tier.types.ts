import type { LoyaltyTierData } from "../../../types/loyalty-tiers.types";

export type LoyaltyTierProps = {
  tier: LoyaltyTierData;
};

/** Class names of the tier card's parts, which flip colours on the featured tier. */
export type LoyaltyTierStyles = {
  card: string;
  threshold: string;
  muted: string;
  perk: string;
  icon: string;
};
