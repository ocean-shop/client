export type ProductThumbnailProps = {
  /** Without one, only the tinted tile shows. */
  image?: string | null;
  alt?: string;
  /** The `sizes` of the image, matching the tile's width. */
  sizes?: string;
  /** Sets the tile's size and corners, which differ between lists. */
  className?: string;
  children?: React.ReactNode;
};
