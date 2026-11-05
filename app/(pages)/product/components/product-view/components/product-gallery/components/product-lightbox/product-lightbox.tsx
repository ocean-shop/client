import Image from "next/image";
import { useBodyScrollLock } from "@/app/core/hooks/use-body-scroll-lock";
import { useEscapeKey } from "@/app/core/hooks/use-escape-key";
import { ProductLightboxHeader } from "./components/product-lightbox-header/product-lightbox-header";
import { ProductLightboxNav } from "./components/product-lightbox-nav/product-lightbox-nav";
import { ProductLightboxThumbs } from "./components/product-lightbox-thumbs/product-lightbox-thumbs";
import { PRODUCT_LIGHTBOX_LABEL } from "./constants/product-lightbox.constants";
import { resolveLightboxImageIndexHelper } from "./helpers/resolve-lightbox-image-index";
import { useProductLightboxArrowKeys } from "./hooks/use-product-lightbox-arrow-keys";
import type { ProductLightboxProps } from "./types/product-lightbox.types";

/**
 * Mounted only while open: the enlarged photo is the heaviest image on the page, so it is not
 * requested until the visitor asks for it.
 */
export const ProductLightbox = ({
  images,
  activeIndex,
  name,
  onSelect,
  onClose,
}: ProductLightboxProps) => {
  const activeImage = images[activeIndex];
  const hasSiblings = images.length > 1;

  const selectRelative = (step: number) => {
    onSelect(resolveLightboxImageIndexHelper(activeIndex, step, images.length));
  };

  useEscapeKey(onClose);
  useBodyScrollLock();
  useProductLightboxArrowKeys(selectRelative);

  if (!activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={PRODUCT_LIGHTBOX_LABEL}
      className="fixed inset-0 z-50 flex flex-col bg-foreground/95"
    >
      <ProductLightboxHeader
        activeIndex={activeIndex}
        imageCount={images.length}
        onClose={onClose}
      />

      {/* Clicking anywhere around the photo closes, the same way the photo itself does. */}
      <div onClick={onClose} className="relative flex-1 cursor-zoom-out">
        <Image
          src={activeImage.url}
          alt={activeImage.alt || name}
          fill
          sizes="100vw"
          preload
          className="object-contain p-4 lg:p-8"
        />
      </div>

      {hasSiblings && (
        <>
          <ProductLightboxNav onStep={selectRelative} />

          <ProductLightboxThumbs
            images={images}
            activeIndex={activeIndex}
            name={name}
            onSelect={onSelect}
          />
        </>
      )}
    </div>
  );
};
