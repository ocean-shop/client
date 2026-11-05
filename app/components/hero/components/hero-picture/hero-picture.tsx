import { getImageProps } from "next/image";
import { HERO_PICTURE_BLANK_IMAGE_SRC } from "./constants/hero-picture.constants";
import type { HeroPictureProps } from "./types/hero-picture.types";

/**
 * The LCP image of one hero layout: eager + high priority, while the `<source>` keeps the
 * other layout's breakpoints from fetching it. Fills its positioned parent.
 */
export const HeroPicture = ({ src, alt, sizes, hiddenMedia }: HeroPictureProps) => {
  const { props: imageProps } = getImageProps({
    src,
    alt,
    fill: true,
    sizes,
    loading: "eager",
    fetchPriority: "high",
    className: "object-cover",
  });

  return (
    <picture>
      <source media={hiddenMedia} srcSet={HERO_PICTURE_BLANK_IMAGE_SRC} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- props come from getImageProps */}
      <img {...imageProps} />
    </picture>
  );
};
