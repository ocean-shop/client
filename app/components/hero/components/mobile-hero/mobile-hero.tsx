import {
  HERO_COUNTDOWN,
  HERO_EYEBROW_LABEL,
  HERO_IMAGE_ALT,
  HERO_PROMO_CODE,
} from "../../constants/hero.constants";
import { HeroPicture } from "../hero-picture/hero-picture";
import {
  MOBILE_HERO_DESCRIPTION_PREFIX,
  MOBILE_HERO_DESCRIPTION_SUFFIX,
  MOBILE_HERO_HEADING,
  MOBILE_HERO_IMAGE_HIDDEN_MEDIA,
  MOBILE_HERO_IMAGE_SIZES,
  MOBILE_HERO_IMAGE_URL,
} from "./constants/mobile-hero.constants";

export const MobileHero = () => {
  return (
    <section className="flex flex-col gap-3.5 bg-background px-4.5 pb-5 pt-3.5 lg:hidden">
      <div className="relative h-[190px] overflow-hidden rounded-xl border-8 border-border-soft bg-border-soft">
        <HeroPicture
          src={MOBILE_HERO_IMAGE_URL}
          alt={HERO_IMAGE_ALT}
          sizes={MOBILE_HERO_IMAGE_SIZES}
          hiddenMedia={MOBILE_HERO_IMAGE_HIDDEN_MEDIA}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11.5px] font-semibold uppercase tracking-[.12em] text-accent">
          {HERO_EYEBROW_LABEL} · {HERO_COUNTDOWN}
        </span>

        <h1 className="font-heading text-[28px] font-semibold leading-[1.08] tracking-[-.03em] text-foreground">
          {MOBILE_HERO_HEADING}
        </h1>

        <p className="text-[13.5px] leading-[1.5] text-muted">
          {MOBILE_HERO_DESCRIPTION_PREFIX} <b className="text-foreground">{HERO_PROMO_CODE}</b>{" "}
          {MOBILE_HERO_DESCRIPTION_SUFFIX}
        </p>
      </div>
    </section>
  );
};
