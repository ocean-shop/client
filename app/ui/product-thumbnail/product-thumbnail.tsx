import Image from "next/image";
import { PRODUCT_THUMBNAIL_BASE_CLASS_NAME } from "./constants/product-thumbnail.constants";
import type { ProductThumbnailProps } from "./types/product-thumbnail.types";

/** A product photo cropped to a tinted tile, which stays empty for a product without one. */
export const ProductThumbnail = ({
  image,
  alt = "",
  sizes,
  className,
  children,
}: ProductThumbnailProps) => {
  return (
    <div className={`${PRODUCT_THUMBNAIL_BASE_CLASS_NAME} ${className ?? ""}`}>
      {image && <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />}
      {children}
    </div>
  );
};
