import type { LoyaltyTierStyles } from "../types/loyalty-tier.types";

export const LOYALTY_TIER_RATE_SUFFIX = " бонусами";
export const LOYALTY_TIER_PERK_ICON = "check";

export const LOYALTY_TIER_REGULAR_STYLES: LoyaltyTierStyles = {
  card: "bg-background text-foreground",
  threshold: "text-accent",
  muted: "text-muted",
  perk: "text-muted",
  icon: "text-accent",
};

export const LOYALTY_TIER_FEATURED_STYLES: LoyaltyTierStyles = {
  card: "bg-accent text-white",
  threshold: "text-accent-soft",
  muted: "text-accent-soft",
  perk: "text-white",
  icon: "text-accent-soft",
};
