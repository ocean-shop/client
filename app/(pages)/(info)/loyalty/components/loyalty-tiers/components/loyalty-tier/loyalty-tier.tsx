import {
  LOYALTY_TIER_FEATURED_STYLES,
  LOYALTY_TIER_PERK_ICON,
  LOYALTY_TIER_RATE_SUFFIX,
  LOYALTY_TIER_REGULAR_STYLES,
} from "./constants/loyalty-tier.constants";
import type { LoyaltyTierProps } from "./types/loyalty-tier.types";

export const LoyaltyTier = ({ tier }: LoyaltyTierProps) => {
  const styles = tier.isFeatured ? LOYALTY_TIER_FEATURED_STYLES : LOYALTY_TIER_REGULAR_STYLES;

  return (
    <li className={`flex flex-col gap-3 rounded-2xl p-[18px] lg:p-[22px] ${styles.card}`}>
      <span
        className={`text-[12.5px] font-semibold uppercase tracking-[.08em] ${styles.threshold}`}
      >
        {tier.threshold}
      </span>
      <span className="font-heading text-xl font-semibold lg:text-[22px]">{tier.name}</span>
      <span className="font-heading text-[28px] font-semibold lg:text-[34px]">
        {tier.rate}
        <span className={`font-sans text-sm font-medium ${styles.muted}`}>
          {LOYALTY_TIER_RATE_SUFFIX}
        </span>
      </span>

      <ul className="flex flex-col gap-2">
        {tier.perks.map((perk) => (
          <li key={perk} className={`flex gap-2 text-[13.5px] leading-[1.45] ${styles.perk}`}>
            <span
              aria-hidden
              className={`flex-none font-symbols text-[17px] leading-[inherit] ${styles.icon}`}
            >
              {LOYALTY_TIER_PERK_ICON}
            </span>
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};
