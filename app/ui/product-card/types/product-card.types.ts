export type ProductBadgeTone = "sale" | "new" | "bestseller";

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
  isFavorite?: boolean;
};

export type ProductCardProps = {
  product: ProductCardData;
  /** The action under the price; the card stays presentational, so the caller wires it up. */
  cta?: React.ReactNode;
};
