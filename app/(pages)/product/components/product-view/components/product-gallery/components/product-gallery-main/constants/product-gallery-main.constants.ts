export const PRODUCT_GALLERY_ZOOM_LABEL = "Збільшити фото";

/**
 * Photos are shown whole rather than cropped to fill: product shots arrive in mixed aspect ratios,
 * and cropping them to the tall frame zooms straight into the middle of the product.
 */
export const PRODUCT_GALLERY_MAIN_IMAGE_CLASS_NAME = "object-contain p-5 lg:p-8";

/** The main photo never exceeds half of a page-width container, so it is asked for at that size. */
export const PRODUCT_GALLERY_MAIN_SIZES = "(min-width: 1024px) 760px, 100vw";
