export type HeroPictureProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Media query where this hero is hidden; the browser loads a blank image there instead. */
  hiddenMedia: string;
};
