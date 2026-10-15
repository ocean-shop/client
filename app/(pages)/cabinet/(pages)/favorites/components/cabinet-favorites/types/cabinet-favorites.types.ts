import type { ProductCardData } from "@/app/ui/product-card/types/product-card.types";

export type CabinetFavoritesProps = {
  products: ProductCardData[];
  total: number;
  page: number;
  totalPages: number;
};
