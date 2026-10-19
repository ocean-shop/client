import { getImageProps } from "next/image";
import Link from "next/link";
import { getMainBannerProduct } from "@/app/shared/products/api/get-main-banner-product";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import {
  HERO_BENEFITS,
  HERO_BLANK_IMAGE_SRC,
  HERO_COUNTDOWN,
  HERO_CTA_LABEL,
  HERO_DESCRIPTION,
  HERO_EYEBROW_LABEL,
  HERO_HEADING_LINES,
  HERO_IMAGE_ALT,
  HERO_IMAGE_HIDDEN_MEDIA,
  HERO_IMAGE_SIZES,
  HERO_IMAGE_URL,
  HERO_PROMO_CODE,
} from "./constants/hero.constants";
import { MobileHero } from "./components/mobile-hero/mobile-hero";

export async function Hero() {
  const mainBannerProduct = await getMainBannerProduct();

  const { props: imageProps } = getImageProps({
    src: HERO_IMAGE_URL,
    alt: HERO_IMAGE_ALT,
    fill: true,
    sizes: HERO_IMAGE_SIZES,
    loading: "eager",
    fetchPriority: "high",
    className: "object-cover",
  });

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

            {mainBannerProduct && (
              <div className="flex pt-2">
                <Link
                  href={buildProductHrefHelper(mainBannerProduct.id)}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[10px] bg-accent px-[26px] text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  {HERO_CTA_LABEL}
                  <span className="font-symbols text-[19px]">arrow_forward</span>
                </Link>
              </div>
            )}
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-[14px] border-[10px] border-border-soft bg-border-soft">
            {/* LCP image on desktop: eager + high priority, while the <source> keeps mobile from fetching it. */}
            <picture>
              <source media={HERO_IMAGE_HIDDEN_MEDIA} srcSet={HERO_BLANK_IMAGE_SRC} />
              {/* eslint-disable-next-line jsx-a11y/alt-text -- props come from getImageProps */}
              <img {...imageProps} />
            </picture>
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
