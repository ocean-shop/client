export const PRODUCT_GALLERY_ZOOM_LABEL = "Збільшити фото";
export const PRODUCT_GALLERY_FAVORITE_LABEL = "Додати в обране";
export const PRODUCT_GALLERY_NO_IMAGES_ICON = "image_not_supported";

export const PRODUCT_GALLERY_LAYOUT_CLASS_NAME = "flex flex-col-reverse gap-3 lg:grid lg:gap-3.5";

/**
 * A single photo renders no thumbs column, so the grid has to drop to one track — otherwise the
 * lone photo lands in the 84px thumb track and collapses to a sliver.
 */
export const PRODUCT_GALLERY_COLUMNS_CLASS_NAME = {
  withThumbs: "lg:grid-cols-[84px_1fr]",
  single: "lg:grid-cols-1",
} as const;

/** Main photo: tall on desktop as in the design, shorter on phones so the info stays reachable. */
export const PRODUCT_GALLERY_MAIN_CLASS_NAME =
  "relative h-[380px] overflow-hidden rounded-[18px] bg-footer lg:h-[560px]";

/**
 * Photos are shown whole rather than cropped to fill: product shots arrive in mixed aspect ratios,
 * and cropping them to the tall frame zooms straight into the middle of the product.
 */
export const PRODUCT_GALLERY_MAIN_IMAGE_CLASS_NAME = "object-contain p-5 lg:p-8";
export const PRODUCT_GALLERY_THUMB_IMAGE_CLASS_NAME = "object-contain p-1.5";

/** The main photo never exceeds half of a page-width container, so it is asked for at that size. */
export const PRODUCT_GALLERY_MAIN_SIZES = "(min-width: 1024px) 760px, 100vw";
export const PRODUCT_GALLERY_THUMB_SIZES = "84px";
