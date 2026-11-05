import type { ProductLightboxNavButton } from "../types/product-lightbox-nav.types";

export const PRODUCT_LIGHTBOX_NAV_CLASS_NAME =
  "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-white";

export const PRODUCT_LIGHTBOX_NAV_BUTTONS: ProductLightboxNavButton[] = [
  {
    icon: "chevron_left",
    label: "Попереднє фото",
    step: -1,
    positionClassName: "left-3 lg:left-6",
  },
  {
    icon: "chevron_right",
    label: "Наступне фото",
    step: 1,
    positionClassName: "right-3 lg:right-6",
  },
];
