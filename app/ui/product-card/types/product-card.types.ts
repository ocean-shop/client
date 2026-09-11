export type ProductBadgeTone = "sale" | "new" | "bestseller";

export type ProductCardData = {
  id: string;
  image: string;
  imageAlt: string;
  badge?: {
    label: string;
    tone: ProductBadgeTone;
  };
  rating: number;
  reviews: number;
  name: string;
  price: string;
  oldPrice?: string;
  isFavorite?: boolean;
  isInCart?: boolean;
  ctaLabel: string;
};

export type ProductCardProps = {
  product: ProductCardData;
};
