import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_LIGHTBOX_CLOSE_KEY,
  PRODUCT_LIGHTBOX_CLOSE_LABEL,
  PRODUCT_LIGHTBOX_LABEL,
  PRODUCT_LIGHTBOX_NAV_CLASS_NAME,
  PRODUCT_LIGHTBOX_NEXT_KEY,
  PRODUCT_LIGHTBOX_NEXT_LABEL,
  PRODUCT_LIGHTBOX_PREVIOUS_KEY,
  PRODUCT_LIGHTBOX_PREVIOUS_LABEL,
} from "./constants/product-lightbox.constants";
import { resolveLightboxImageIndexHelper } from "./helpers/resolve-lightbox-image-index";
import type { ProductLightboxProps } from "./types/product-lightbox.types";

/**
 * Mounted only while open: the enlarged photo is the heaviest image on the page, so it is not
 * requested until the visitor asks for it.
 */
export function ProductLightbox({
  images,
  activeIndex,
  name,
  onSelect,
  onClose,
}: ProductLightboxProps) {
  const activeImage = images[activeIndex];
  const imageCount = images.length;
  const hasSiblings = imageCount > 1;

  function selectRelative(step: number) {
    onSelect(resolveLightboxImageIndexHelper(activeIndex, step, imageCount));
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === PRODUCT_LIGHTBOX_CLOSE_KEY) onClose();

      if (event.key === PRODUCT_LIGHTBOX_PREVIOUS_KEY) {
        onSelect(resolveLightboxImageIndexHelper(activeIndex, -1, imageCount));
      }

      if (event.key === PRODUCT_LIGHTBOX_NEXT_KEY) {
        onSelect(resolveLightboxImageIndexHelper(activeIndex, 1, imageCount));
      }
    }

    // The page behind the overlay would otherwise scroll along with the wheel over the photo.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, imageCount, onClose, onSelect]);

  if (!activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={PRODUCT_LIGHTBOX_LABEL}
      className="fixed inset-0 z-50 flex flex-col bg-foreground/95"
    >
      <div className="flex items-center justify-between px-4 py-3 text-white lg:px-6">
        <span className="text-sm text-white/70">
          {activeIndex + 1} / {images.length}
        </span>

        <Button
          variant="unstyled"
          size="auto"
          onClick={onClose}
          aria-label={PRODUCT_LIGHTBOX_CLOSE_LABEL}
          className="flex h-10 w-10 items-center justify-center rounded-full font-symbols text-[28px] text-white hover:bg-white/15"
        >
          close
        </Button>
      </div>

      {/* Clicking anywhere around the photo closes, the same way the photo itself does. */}
      <div onClick={onClose} className="relative flex-1 cursor-zoom-out">
        <Image
          src={activeImage.url}
          alt={name}
          fill
          sizes="100vw"
          priority
          className="object-contain p-4 lg:p-8"
        />
      </div>

      {hasSiblings && (
        <>
          <Button
            variant="unstyled"
            size="auto"
            onClick={() => selectRelative(-1)}
            aria-label={PRODUCT_LIGHTBOX_PREVIOUS_LABEL}
            className={`left-3 lg:left-6 ${PRODUCT_LIGHTBOX_NAV_CLASS_NAME}`}
          >
            <span className="font-symbols text-2xl">chevron_left</span>
          </Button>

          <Button
            variant="unstyled"
            size="auto"
            onClick={() => selectRelative(1)}
            aria-label={PRODUCT_LIGHTBOX_NEXT_LABEL}
            className={`right-3 lg:right-6 ${PRODUCT_LIGHTBOX_NAV_CLASS_NAME}`}
          >
            <span className="font-symbols text-2xl">chevron_right</span>
          </Button>

          <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4 [scrollbar-width:none]">
            {images.map((image, index) => (
              <Button
                key={image.id}
                variant="unstyled"
                size="auto"
                onClick={() => onSelect(index)}
                aria-label={`${name} — ${index + 1}`}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-[10px] border-2 ${
                  index === activeIndex ? "border-white" : "border-transparent opacity-60"
                }`}
              >
                <Image src={image.url} alt="" fill sizes="56px" className="object-cover" />
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
