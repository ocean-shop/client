import { CatalogGrid } from "@/app/components/catalog-grid/catalog-grid";
import type { CatalogBodyProps } from "./types/catalog-body.types";

export function CatalogBody({ category }: CatalogBodyProps) {
  return (
    <div>
      <CatalogGrid category={category} />
    </div>
  );
}
