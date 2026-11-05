import { Button } from "@/app/ui/button/button";
import { PRODUCT_GALLERY_IMAGE_LABEL } from "../../constants/product-gallery.constants";
import type { ProductGalleryDotsProps } from "./types/product-gallery-dots.types";

export const ProductGalleryDots = ({
  images,
  activeIndex,
  name,
  onSelect,
}: ProductGalleryDotsProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
      {images.map((image, index) => (
        <Button
          key={image.id}
          variant="unstyled"
          size="auto"
          onClick={() => onSelect(index)}
          aria-label={PRODUCT_GALLERY_IMAGE_LABEL(name, index)}
          className={`h-1.5 rounded-[3px] transition-all ${
            index === activeIndex ? "w-5 bg-accent" : "w-1.5 bg-white/75"
          }`}
        />
      ))}
    </div>
  );
};
