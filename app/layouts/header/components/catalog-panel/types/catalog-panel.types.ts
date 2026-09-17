import type { CatalogCategoryTree } from "@/app/shared/catalog-categories/types/catalog-categories.types";

export type CatalogPanelProps = {
  categories: CatalogCategoryTree[];
};

export type CatalogPanelPromo = {
  badge: string;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  ctaLabel: string;
};
