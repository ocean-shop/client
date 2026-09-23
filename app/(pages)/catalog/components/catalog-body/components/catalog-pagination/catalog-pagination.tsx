"use client";

import { Pagination } from "@/app/ui/pagination/pagination";
import { useCatalogQuery } from "../../../../hooks/use-catalog-query";
import type { CatalogPaginationProps } from "./types/catalog-pagination.types";

export function CatalogPagination({ query, totalPages }: CatalogPaginationProps) {
  const { applyQuery, isPending } = useCatalogQuery(query);

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={query.page}
      onPageChange={(page) => applyQuery({ page })}
      isDisabled={isPending}
    />
  );
}
