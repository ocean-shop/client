import Image from "next/image";
import {
  MOBILE_HERO_COUNTDOWN,
  MOBILE_HERO_DESCRIPTION_PREFIX,
  MOBILE_HERO_DESCRIPTION_SUFFIX,
  MOBILE_HERO_EYEBROW_LABEL,
  MOBILE_HERO_HEADING,
  MOBILE_HERO_IMAGE_ALT,
  MOBILE_HERO_IMAGE_URL,
  MOBILE_HERO_PROMO_CODE,
} from "./constants/mobile-hero.constants";

export function MobileHero() {
  return (
    <section className="flex flex-col gap-3.5 bg-background px-4.5 pb-5 pt-3.5 lg:hidden">
      <div className="relative h-[190px] overflow-hidden rounded-xl border-8 border-border-soft bg-border-soft">
        <Image
          src={MOBILE_HERO_IMAGE_URL}
          alt={MOBILE_HERO_IMAGE_ALT}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[11.5px] font-semibold uppercase tracking-[.12em] text-accent">
          {MOBILE_HERO_EYEBROW_LABEL} · {MOBILE_HERO_COUNTDOWN}
        </span>

        <h1 className="font-heading text-[28px] font-semibold leading-[1.08] tracking-[-.03em] text-foreground">
          {MOBILE_HERO_HEADING}
        </h1>

        <p className="text-[13.5px] leading-[1.5] text-muted">
          {MOBILE_HERO_DESCRIPTION_PREFIX}{" "}
          <b className="text-foreground">{MOBILE_HERO_PROMO_CODE}</b>{" "}
          {MOBILE_HERO_DESCRIPTION_SUFFIX}
        </p>
      </div>
    </section>
  );
}
