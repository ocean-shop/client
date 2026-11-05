import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_LIGHTBOX_NAV_BUTTONS,
  PRODUCT_LIGHTBOX_NAV_CLASS_NAME,
} from "./constants/product-lightbox-nav.constants";
import type { ProductLightboxNavProps } from "./types/product-lightbox-nav.types";

export const ProductLightboxNav = ({ onStep }: ProductLightboxNavProps) => {
  return (
    <>
      {PRODUCT_LIGHTBOX_NAV_BUTTONS.map((button) => (
        <Button
          key={button.icon}
          variant="unstyled"
          size="auto"
          onClick={() => onStep(button.step)}
          aria-label={button.label}
          className={`${button.positionClassName} ${PRODUCT_LIGHTBOX_NAV_CLASS_NAME}`}
        >
          <MaterialIcon name={button.icon} className="text-2xl" />
        </Button>
      ))}
    </>
  );
};
