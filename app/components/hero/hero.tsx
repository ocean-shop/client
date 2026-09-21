import Image from "next/image";
import { Button } from "@/app/ui/button/button";
import {
  HERO_BENEFITS,
  HERO_COUNTDOWN,
  HERO_DESCRIPTION,
  HERO_EYEBROW_LABEL,
  HERO_HEADING_LINES,
  HERO_IMAGE_ALT,
  HERO_IMAGE_URL,
  HERO_PRIMARY_CTA_LABEL,
  HERO_PROMO_CODE,
  HERO_SECONDARY_CTA_LABEL,
} from "./constants/hero.constants";
import { MobileHero } from "./components/mobile-hero/mobile-hero";

export function Hero() {
  return (
    <>
      <MobileHero />

      <section className="hidden lg:block bg-background">
        <div className="mx-auto grid max-w-page grid-cols-2 items-center gap-12 px-10 pb-16 pt-[72px]">
          <div className="flex flex-col gap-[22px]">
            <span className="text-[12.5px] font-semibold uppercase tracking-[.14em] text-accent">
              {HERO_EYEBROW_LABEL} · {HERO_COUNTDOWN}
            </span>

            <h1 className="text-pretty font-heading text-[54px] font-semibold leading-[1.03] tracking-[-.035em] text-foreground">
              {HERO_HEADING_LINES.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < HERO_HEADING_LINES.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="max-w-[420px] text-pretty text-base leading-[1.6] text-muted">
              {HERO_DESCRIPTION} <b className="text-foreground">{HERO_PROMO_CODE}</b>
            </p>

            <div className="flex gap-3 pt-2">
              <Button size="lg">
                {HERO_PRIMARY_CTA_LABEL}
                <span className="font-symbols text-[19px]">arrow_forward</span>
              </Button>
              <Button
                variant="unstyled"
                size="lg"
                className="border border-border-soft bg-background font-semibold text-foreground hover:border-accent"
              >
                {HERO_SECONDARY_CTA_LABEL}
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-[14px] border-[10px] border-border-soft bg-border-soft">
            <Image src={HERO_IMAGE_URL} alt={HERO_IMAGE_ALT} fill className="object-cover" />
          </div>
        </div>

        <div className="bg-accent">
          <div className="mx-auto flex max-w-page gap-11 px-10 py-5 text-[13.5px] text-accent-soft">
            {HERO_BENEFITS.map((benefit) => (
              <span key={benefit.title} className="flex items-center gap-2">
                <span className="font-symbols text-[19px] text-accent-soft">{benefit.icon}</span>
                {benefit.title}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
