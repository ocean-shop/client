export type LoyaltyTierData = {
  /** What it takes to reach the tier, e.g. "Від 10 000 ₴ за рік". */
  threshold: string;
  name: string;
  /** Share of the order paid back in bonuses, e.g. "3%". */
  rate: string;
  perks: string[];
  /** Highlighted with the accent background. */
  isFeatured?: boolean;
};

export type LoyaltyTiersProps = {
  tiers: LoyaltyTierData[];
};
