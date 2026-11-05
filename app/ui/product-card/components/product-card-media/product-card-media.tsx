import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_BADGE_TONE_STYLES,
  PRODUCT_CARD_MEDIA_BADGE_CLASS_NAME,
} from "./constants/product-card-media.constants";
import type { ProductCardMediaProps } from "./types/product-card-media.types";

/** The photo (or a placeholder icon) linking to the product, with the badge and favourite on top. */
export const ProductCardMedia = ({ product, styles, favorite }: ProductCardMediaProps) => {
  return (
    <div className={`relative overflow-hidden bg-footer ${styles.image}`}>
      <Link href={product.href} aria-label={product.name} className="absolute inset-0">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt}
            sizes={styles.imageSizes}
            fill
            className="object-cover"
          />
        ) : (
          <MaterialIcon
            name="image"
            className={`flex h-full items-center justify-center text-muted-light ${styles.imageFallback}`}
          />
        )}
      </Link>

      {product.badge && (
        <span
          className={`${PRODUCT_CARD_MEDIA_BADGE_CLASS_NAME} ${PRODUCT_BADGE_TONE_STYLES[product.badge.tone]}`}
        >
          {product.badge.label}
        </span>
      )}

      {favorite && <div className={`absolute ${styles.favorite}`}>{favorite}</div>}
    </div>
  );
};
