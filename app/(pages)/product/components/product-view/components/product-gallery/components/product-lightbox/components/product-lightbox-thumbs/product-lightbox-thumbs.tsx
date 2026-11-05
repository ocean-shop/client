import Image from "next/image";
import { Button } from "@/app/ui/button/button";
import { PRODUCT_GALLERY_IMAGE_LABEL } from "../../../../constants/product-gallery.constants";
import type { ProductLightboxThumbsProps } from "./types/product-lightbox-thumbs.types";

export const ProductLightboxThumbs = ({
  images,
  activeIndex,
  name,
  onSelect,
}: ProductLightboxThumbsProps) => {
  return (
    <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4 [scrollbar-width:none]">
      {images.map((image, index) => (
        <Button
          key={image.id}
          variant="unstyled"
          size="auto"
          onClick={() => onSelect(index)}
          aria-label={PRODUCT_GALLERY_IMAGE_LABEL(name, index)}
          className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-[10px] border-2 ${
            index === activeIndex ? "border-white" : "border-transparent opacity-60"
          }`}
        >
          <Image src={image.url} alt="" fill sizes="56px" className="object-cover" />
        </Button>
      ))}
    </div>
  );
};
