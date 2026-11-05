import Image from "next/image";
import { ProductFavoriteButton } from "@/app/components/product-favorite-button/product-favorite-button";
import { PRODUCT_DISCOUNT_BADGE_LABEL } from "@/app/shared/products/constants/products.constants";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { PRODUCT_GALLERY_MAIN_CLASS_NAME } from "../../constants/product-gallery.constants";
import {
  PRODUCT_GALLERY_MAIN_IMAGE_CLASS_NAME,
  PRODUCT_GALLERY_MAIN_SIZES,
  PRODUCT_GALLERY_ZOOM_LABEL,
} from "./constants/product-gallery-main.constants";
import type { ProductGalleryMainProps } from "./types/product-gallery-main.types";

/** The active photo, which opens the lightbox, with the discount and favourite on top of it. */
export const ProductGalleryMain = ({
  productId,
  image,
  name,
  discountPercent,
  onZoom,
  children,
}: ProductGalleryMainProps) => {
  return (
    <div className={PRODUCT_GALLERY_MAIN_CLASS_NAME}>
      <Button
        variant="unstyled"
        size="auto"
        onClick={onZoom}
        aria-label={PRODUCT_GALLERY_ZOOM_LABEL}
        className="absolute inset-0 cursor-zoom-in"
      >
        <Image
          src={image.url}
          alt={image.alt || name}
          fill
          sizes={PRODUCT_GALLERY_MAIN_SIZES}
          preload
          className={PRODUCT_GALLERY_MAIN_IMAGE_CLASS_NAME}
        />
      </Button>

      {discountPercent !== undefined && (
        <span className="pointer-events-none absolute left-4 top-4 rounded-md bg-background px-2.5 py-[5px] text-xs font-semibold tracking-[.03em] text-accent">
          {PRODUCT_DISCOUNT_BADGE_LABEL(discountPercent)}
        </span>
      )}

      <div className="absolute right-3.5 top-3.5">
        <ProductFavoriteButton productId={productId} productName={name} variant="gallery" />
      </div>

      <MaterialIcon
        name="zoom_in"
        className="pointer-events-none absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/85 text-xl text-muted"
      />

      {children}
    </div>
  );
};
