import Image from "next/image";
import Link from "next/link";
import {
  PRODUCT_BADGE_TONE_STYLES,
  PRODUCT_CARD_SIZE_STYLES,
} from "./constants/product-card.constants";
import type { ProductCardProps } from "./types/product-card.types";

export const ProductCard = ({ product, size = "default", cta, favorite }: ProductCardProps) => {
  const styles = PRODUCT_CARD_SIZE_STYLES[size];

  return (
    <div className={`flex flex-col bg-background ${styles.root}`}>
      <div className={`relative overflow-hidden bg-footer ${styles.image}`}>
        <Link href={product.href} aria-label={product.name} className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.imageAlt}
            sizes={styles.imageSizes}
            fill
            className="object-cover"
          />
        </Link>

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-md bg-background px-[9px] py-1 text-[11px] font-semibold tracking-[.03em] ${PRODUCT_BADGE_TONE_STYLES[product.badge.tone]}`}
          >
            {product.badge.label}
          </span>
        )}

        {favorite && <div className={`absolute ${styles.favorite}`}>{favorite}</div>}
      </div>

      {product.rating !== undefined && product.reviews !== undefined && (
        <div className="flex items-center gap-[5px] text-[12.5px] text-muted-light">
          <span
            className="font-symbols text-sm text-accent"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <b className="font-semibold text-foreground">{product.rating}</b>({product.reviews})
        </div>
      )}

      <Link
        href={product.href}
        className={`text-pretty font-medium text-foreground hover:text-accent ${styles.name}`}
      >
        {product.name}
      </Link>

      <div className="flex items-baseline gap-[9px]">
        <span className={`font-heading font-semibold text-foreground ${styles.price}`}>
          {product.price}
        </span>
        {product.oldPrice && (
          <span className={`text-muted-light line-through ${styles.oldPrice}`}>
            {product.oldPrice}
          </span>
        )}
      </div>

      {cta}
    </div>
  );
};
