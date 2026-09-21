import type { SelectOption } from "@/app/ui/select/types/select.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";

export const CATALOG_BODY_HOME_BREADCRUMB_ITEM: BreadcrumbItem = {
  label: "Головна",
  href: "/",
};

export const CATALOG_BODY_SORT_LABEL = "Сортувати";

export const CATALOG_BODY_SORT_OPTIONS: SelectOption[] = [
  { id: "popular", label: "За популярністю" },
  { id: "price-asc", label: "Спочатку дешевші" },
  { id: "price-desc", label: "Спочатку дорожчі" },
  { id: "new", label: "Новинки" },
];

export const CATALOG_BODY_PRODUCTS_PER_PAGE = 20;
