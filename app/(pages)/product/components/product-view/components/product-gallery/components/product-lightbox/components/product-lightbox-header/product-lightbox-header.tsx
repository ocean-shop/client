import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { PRODUCT_LIGHTBOX_CLOSE_LABEL } from "./constants/product-lightbox-header.constants";
import type { ProductLightboxHeaderProps } from "./types/product-lightbox-header.types";

export const ProductLightboxHeader = ({
  activeIndex,
  imageCount,
  onClose,
}: ProductLightboxHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-white lg:px-6">
      <span className="text-sm text-white/70">
        {activeIndex + 1} / {imageCount}
      </span>

      <Button
        variant="unstyled"
        size="auto"
        onClick={onClose}
        aria-label={PRODUCT_LIGHTBOX_CLOSE_LABEL}
        className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/15"
      >
        <MaterialIcon name="close" className="text-[28px]" />
      </Button>
    </div>
  );
};
