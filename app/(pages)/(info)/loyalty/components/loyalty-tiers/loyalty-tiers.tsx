import { LoyaltyTier } from "./components/loyalty-tier/loyalty-tier";
import type { LoyaltyTiersProps } from "./types/loyalty-tiers.types";

export function LoyaltyTiers({ tiers }: LoyaltyTiersProps) {
  return (
    <ul className="grid gap-3 md:grid-cols-3 lg:gap-4">
      {tiers.map((tier) => (
        <LoyaltyTier key={tier.name} tier={tier} />
      ))}
    </ul>
  );
}
