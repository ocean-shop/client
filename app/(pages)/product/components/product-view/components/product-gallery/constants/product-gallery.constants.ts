export const PRODUCT_GALLERY_NO_IMAGES_ICON = "image_not_supported";

/** Names a photo for screen readers wherever a row of photos can be switched between. */
export const PRODUCT_GALLERY_IMAGE_LABEL = (name: string, index: number) =>
  `${name} — ${index + 1}`;

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
