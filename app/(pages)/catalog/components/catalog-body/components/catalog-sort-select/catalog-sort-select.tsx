"use client";

import { Select } from "@/app/ui/select/select";
import {
  CATALOG_PRODUCTS_DEFAULT_SORT,
  CATALOG_PRODUCT_SORT_OPTIONS,
} from "@/app/shared/products/constants/products.constants";
import type { CatalogProductSort } from "@/app/shared/products/types/products.types";
import { useCatalogQuery } from "../../../../hooks/use-catalog-query";
import { CATALOG_BODY_SORT_LABEL } from "../../constants/catalog-body.constants";
import type { CatalogSortSelectProps } from "./types/catalog-sort-select.types";

export function CatalogSortSelect({ query }: CatalogSortSelectProps) {
  const { applyQuery } = useCatalogQuery(query);

  return (
    <Select
      label={CATALOG_BODY_SORT_LABEL}
      options={CATALOG_PRODUCT_SORT_OPTIONS}
      selectedId={query.sort ?? CATALOG_PRODUCTS_DEFAULT_SORT}
      onChange={(sortId) => applyQuery({ sort: sortId as CatalogProductSort })}
    />
  );
}
