import { getMainBannerProduct } from "@/app/shared/products/api/get-main-banner-product";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { ButtonLink } from "@/app/ui/button-link/button-link";
import {
  HERO_COUNTDOWN,
  HERO_EYEBROW_LABEL,
  HERO_IMAGE_ALT,
  HERO_PROMO_CODE,
} from "../../constants/hero.constants";
import { HeroPicture } from "../hero-picture/hero-picture";
import { DesktopHeroBenefits } from "./components/desktop-hero-benefits/desktop-hero-benefits";
import {
  DESKTOP_HERO_CTA_ICON,
  DESKTOP_HERO_CTA_LABEL,
  DESKTOP_HERO_DESCRIPTION,
  DESKTOP_HERO_HEADING_LINES,
  DESKTOP_HERO_IMAGE_HIDDEN_MEDIA,
  DESKTOP_HERO_IMAGE_SIZES,
  DESKTOP_HERO_IMAGE_URL,
} from "./constants/desktop-hero.constants";

export const DesktopHero = async () => {
  const mainBannerProduct = await getMainBannerProduct();

  return (
    <section className="hidden lg:block bg-background">
      <div className="mx-auto grid max-w-page grid-cols-2 items-center gap-12 px-10 pb-16 pt-[72px]">
        <div className="flex flex-col gap-[22px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[.14em] text-accent">
            {HERO_EYEBROW_LABEL} · {HERO_COUNTDOWN}
          </span>

          <h1 className="text-pretty font-heading text-[54px] font-semibold leading-[1.03] tracking-[-.035em] text-foreground">
            {DESKTOP_HERO_HEADING_LINES.map((line, index) => (
              <span key={line}>
                {line}
                {index < DESKTOP_HERO_HEADING_LINES.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="max-w-[420px] text-pretty text-base leading-[1.6] text-muted">
            {DESKTOP_HERO_DESCRIPTION} <b className="text-foreground">{HERO_PROMO_CODE}</b>
          </p>

          {mainBannerProduct && (
            <div className="flex pt-2">
              <ButtonLink
                href={buildProductHrefHelper(mainBannerProduct.slug)}
                size="lg"
                trailingIcon={DESKTOP_HERO_CTA_ICON}
              >
                {DESKTOP_HERO_CTA_LABEL}
              </ButtonLink>
            </div>
          )}
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-[14px] border-[10px] border-border-soft bg-border-soft">
          <HeroPicture
            src={DESKTOP_HERO_IMAGE_URL}
            alt={HERO_IMAGE_ALT}
            sizes={DESKTOP_HERO_IMAGE_SIZES}
            hiddenMedia={DESKTOP_HERO_IMAGE_HIDDEN_MEDIA}
          />
        </div>
      </div>

      <DesktopHeroBenefits />
    </section>
  );
};
