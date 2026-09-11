import Image from "next/image";
import {
  PRODUCT_BADGE_TONE_STYLES,
  PRODUCT_CTA_STYLES,
  PRODUCT_FAVORITE_ICON_STYLES,
} from "./constants/product-card.constants";
import type { ProductCardProps } from "./types/product-card.types";

export function ProductCard({ product }: ProductCardProps) {
  const favoriteStyle = product.isFavorite
    ? PRODUCT_FAVORITE_ICON_STYLES.active
    : PRODUCT_FAVORITE_ICON_STYLES.inactive;

  const ctaStyle = product.isInCart ? PRODUCT_CTA_STYLES.inCart : PRODUCT_CTA_STYLES.default;

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-background p-3.5">
      <div className="relative h-[240px] overflow-hidden rounded-xl bg-footer">
        <Image src={product.image} alt={product.imageAlt} fill className="object-cover" />

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-md bg-background px-[9px] py-1 text-[11px] font-semibold tracking-[.03em] ${PRODUCT_BADGE_TONE_STYLES[product.badge.tone]}`}
          >
            {product.badge.label}
          </span>
        )}

        <button
          type="button"
          className="absolute right-2.5 top-2.5 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-white/90"
        >
          <span
            className={`font-symbols text-[19px] ${favoriteStyle}`}
            style={{ fontVariationSettings: product.isFavorite ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>
      </div>

      <div className="flex items-center gap-[5px] text-[12.5px] text-muted-light">
        <span
          className="font-symbols text-sm text-accent"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
        <b className="font-semibold text-foreground">{product.rating}</b>({product.reviews})
      </div>

      <div className="text-pretty text-[15px] font-medium leading-[1.4] text-foreground">
        {product.name}
      </div>

      <div className="flex items-baseline gap-[9px]">
        <span className="font-heading text-[18px] font-semibold text-foreground">
          {product.price}
        </span>
        {product.oldPrice && (
          <span className="text-[13px] text-muted-light line-through">{product.oldPrice}</span>
        )}
      </div>

      <button type="button" className={`h-11 rounded-[10px] text-sm font-semibold ${ctaStyle}`}>
        {product.ctaLabel}
      </button>
    </div>
  );
}
