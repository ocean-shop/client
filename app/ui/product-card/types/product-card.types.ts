export type ProductBadgeTone = "sale" | "new" | "bestseller";

/** `compact` shrinks the card below `lg`, for two cards side by side on a phone. */
export type ProductCardSize = "default" | "compact";

export type ProductCardSizeStyles = {
  root: string;
  image: string;
  imageSizes: string;
  favorite: string;
  name: string;
  price: string;
  oldPrice: string;
};

export type ProductCardData = {
  id: string;
  href: string;
  image: string;
  imageAlt: string;
  badge?: {
    label: string;
    tone: ProductBadgeTone;
  };
  rating?: number;
  reviews?: number;
  name: string;
  price: string;
  oldPrice?: string;
};

export type ProductCardProps = {
  product: ProductCardData;
  size?: ProductCardSize;
  /** The action under the price; the card stays presentational, so the caller wires it up. */
  cta?: React.ReactNode;
  /** The button in the photo's top right corner, wired up by the caller like `cta`. */
  favorite?: React.ReactNode;
};
