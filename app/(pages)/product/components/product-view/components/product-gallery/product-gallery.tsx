import { useState } from "react";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ProductGalleryDots } from "./components/product-gallery-dots/product-gallery-dots";
import { ProductGalleryMain } from "./components/product-gallery-main/product-gallery-main";
import { ProductGalleryThumbs } from "./components/product-gallery-thumbs/product-gallery-thumbs";
import { ProductLightbox } from "./components/product-lightbox/product-lightbox";
import {
  PRODUCT_GALLERY_COLUMNS_CLASS_NAME,
  PRODUCT_GALLERY_LAYOUT_CLASS_NAME,
  PRODUCT_GALLERY_MAIN_CLASS_NAME,
  PRODUCT_GALLERY_NO_IMAGES_ICON,
} from "./constants/product-gallery.constants";
import type { ProductGalleryProps } from "./types/product-gallery.types";

export const ProductGallery = ({
  productId,
  images,
  name,
  discountPercent,
}: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const activeImage = images[activeIndex];
  const hasThumbs = images.length > 1;

  if (!activeImage) {
    return (
      <div className={`flex items-center justify-center ${PRODUCT_GALLERY_MAIN_CLASS_NAME}`}>
        <MaterialIcon name={PRODUCT_GALLERY_NO_IMAGES_ICON} className="text-5xl text-muted-light" />
      </div>
    );
  }

  return (
    <>
      {/* Thumbs sit left of the photo on desktop and scroll under it on phones. */}
      <div
        className={`${PRODUCT_GALLERY_LAYOUT_CLASS_NAME} ${
          hasThumbs
            ? PRODUCT_GALLERY_COLUMNS_CLASS_NAME.withThumbs
            : PRODUCT_GALLERY_COLUMNS_CLASS_NAME.single
        }`}
      >
        {hasThumbs && (
          <ProductGalleryThumbs
            images={images}
            activeIndex={activeIndex}
            name={name}
            onSelect={setActiveIndex}
          />
        )}

        <ProductGalleryMain
          productId={productId}
          image={activeImage}
          name={name}
          discountPercent={discountPercent}
          onZoom={() => setIsZoomOpen(true)}
        >
          {hasThumbs && (
            <ProductGalleryDots
              images={images}
              activeIndex={activeIndex}
              name={name}
              onSelect={setActiveIndex}
            />
          )}
        </ProductGalleryMain>
      </div>

      {isZoomOpen && (
        <ProductLightbox
          images={images}
          activeIndex={activeIndex}
          name={name}
          onSelect={setActiveIndex}
          onClose={() => setIsZoomOpen(false)}
        />
      )}
    </>
  );
};
