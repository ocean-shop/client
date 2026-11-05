import Image from "next/image";
import { Button } from "@/app/ui/button/button";
import { PRODUCT_GALLERY_IMAGE_LABEL } from "../../constants/product-gallery.constants";
import {
  PRODUCT_GALLERY_THUMB_IMAGE_CLASS_NAME,
  PRODUCT_GALLERY_THUMB_SIZES,
} from "./constants/product-gallery-thumbs.constants";
import type { ProductGalleryThumbsProps } from "./types/product-gallery-thumbs.types";

export const ProductGalleryThumbs = ({
  images,
  activeIndex,
  name,
  onSelect,
}: ProductGalleryThumbsProps) => {
  return (
    <div className="flex gap-2.5 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible">
      {images.map((image, index) => (
        <Button
          key={image.id}
          variant="unstyled"
          size="auto"
          onClick={() => onSelect(index)}
          aria-label={PRODUCT_GALLERY_IMAGE_LABEL(name, index)}
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
  );
};
