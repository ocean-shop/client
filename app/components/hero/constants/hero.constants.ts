import type { HeroBenefit } from "../types/hero.types";

export const HERO_EYEBROW_LABEL = "Сезонний сейл";

export const HERO_COUNTDOWN = "12:04:33";

export const HERO_HEADING_LINES = ["Знижки до −40%", "на колекцію"];

export const HERO_DESCRIPTION = "Мінус 200 ₴ на перше онлайн-замовлення з промокодом";

export const HERO_PROMO_CODE = "OCEAN2025";

export const HERO_PRIMARY_CTA_LABEL = "Переглянути акції";

export const HERO_SECONDARY_CTA_LABEL = "Каталог товарів";

export const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80";

/** Right half of the two-column hero, capped by the 1600px page width. */
export const HERO_IMAGE_SIZES = "(min-width: 1600px) 736px, 50vw";

/** Below `lg` the desktop hero is hidden, so its <picture> swaps to a blank image there. */
export const HERO_IMAGE_HIDDEN_MEDIA = "(max-width: 1023.98px)";

/** Inline 1×1 transparent GIF: lets an eager hero image skip the network at breakpoints where it is hidden. */
export const HERO_BLANK_IMAGE_SRC =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const HERO_IMAGE_ALT = "Сезонна колекція Ocean";

export const HERO_BENEFITS: HeroBenefit[] = [
  { icon: "local_shipping", title: "Безкоштовна доставка від 1000 ₴" },
  { icon: "verified", title: "Гарантія якості на всі товари" },
  { icon: "sync", title: "Легке повернення протягом 14 днів" },
  { icon: "support_agent", title: "Підтримка 24/7" },
];
