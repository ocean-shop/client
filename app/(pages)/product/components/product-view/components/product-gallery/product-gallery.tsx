import Image from "next/image";
import { useState } from "react";
import { Button } from "@/app/ui/button/button";
import { ProductLightbox } from "./components/product-lightbox/product-lightbox";
import {
  PRODUCT_GALLERY_COLUMNS_CLASS_NAME,
  PRODUCT_GALLERY_FAVORITE_LABEL,
  PRODUCT_GALLERY_LAYOUT_CLASS_NAME,
  PRODUCT_GALLERY_MAIN_CLASS_NAME,
  PRODUCT_GALLERY_MAIN_IMAGE_CLASS_NAME,
  PRODUCT_GALLERY_MAIN_SIZES,
  PRODUCT_GALLERY_NO_IMAGES_ICON,
  PRODUCT_GALLERY_THUMB_IMAGE_CLASS_NAME,
  PRODUCT_GALLERY_THUMB_SIZES,
  PRODUCT_GALLERY_ZOOM_LABEL,
} from "./constants/product-gallery.constants";
import type { ProductGalleryProps } from "./types/product-gallery.types";

export function ProductGallery({ images, name, discountPercent }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const activeImage = images[activeIndex];
  const hasThumbs = images.length > 1;

  if (!activeImage) {
    return (
      <div className={`flex items-center justify-center ${PRODUCT_GALLERY_MAIN_CLASS_NAME}`}>
        <span className="font-symbols text-5xl text-muted-light">
          {PRODUCT_GALLERY_NO_IMAGES_ICON}
        </span>
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
          <div className="flex gap-2.5 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible">
            {images.map((image, index) => (
              <Button
                key={image.id}
                variant="unstyled"
                size="auto"
                onClick={() => setActiveIndex(index)}
                aria-label={`${name} — ${index + 1}`}
                aria-current={index === activeIndex}
                className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border-2 bg-footer lg:h-[84px] lg:w-full ${
                  index === activeIndex ? "border-accent" : "border-transparent"
                }`}
              >
                <Image
                  src={image.url}
                  alt=""
                  fill
                  sizes={PRODUCT_GALLERY_THUMB_SIZES}
                  className={PRODUCT_GALLERY_THUMB_IMAGE_CLASS_NAME}
                />
              </Button>
            ))}
          </div>
        )}

        <div className={PRODUCT_GALLERY_MAIN_CLASS_NAME}>
          <Button
            variant="unstyled"
            size="auto"
            onClick={() => setIsZoomOpen(true)}
            aria-label={PRODUCT_GALLERY_ZOOM_LABEL}
            className="absolute inset-0 cursor-zoom-in"
          >
            <Image
              src={activeImage.url}
              alt={name}
              fill
              sizes={PRODUCT_GALLERY_MAIN_SIZES}
              priority
              className={PRODUCT_GALLERY_MAIN_IMAGE_CLASS_NAME}
            />
          </Button>

          {discountPercent !== undefined && (
            <span className="pointer-events-none absolute left-4 top-4 rounded-md bg-background px-2.5 py-[5px] text-xs font-semibold tracking-[.03em] text-accent">
              −{discountPercent}%
            </span>
          )}

          <Button
            variant="unstyled"
            size="auto"
            onClick={() => setIsFavorite((favorite) => !favorite)}
            aria-label={PRODUCT_GALLERY_FAVORITE_LABEL}
            aria-pressed={isFavorite}
            className="absolute right-3.5 top-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white/95 hover:bg-white"
          >
            <span
              className={`font-symbols text-[22px] ${isFavorite ? "text-error" : "text-muted"}`}
              style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </Button>

          <span className="pointer-events-none absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/85 font-symbols text-xl text-muted">
            zoom_in
          </span>

          {hasThumbs && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((image, index) => (
                <Button
                  key={image.id}
                  variant="unstyled"
                  size="auto"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${name} — ${index + 1}`}
                  className={`h-1.5 rounded-[3px] transition-all ${
                    index === activeIndex ? "w-5 bg-accent" : "w-1.5 bg-white/75"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
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
}
