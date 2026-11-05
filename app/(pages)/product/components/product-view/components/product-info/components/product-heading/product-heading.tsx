import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { ProductAvailability } from "./components/product-availability/product-availability";
import { PRODUCT_HEADING_SKU_LABEL } from "./constants/product-heading.constants";
import type { ProductHeadingProps } from "./types/product-heading.types";

export const ProductHeading = ({ name, offer, breadcrumbItems }: ProductHeadingProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-pretty font-heading text-2xl font-semibold leading-[1.2] tracking-[-.025em] text-foreground lg:text-[30px]">
        {name}
      </h1>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13.5px] text-muted-light">
        {offer.sku && (
          <span>
            {PRODUCT_HEADING_SKU_LABEL}: {offer.sku}
          </span>
        )}

        <ProductAvailability available={offer.available} />
      </div>
    </div>
  );
};
