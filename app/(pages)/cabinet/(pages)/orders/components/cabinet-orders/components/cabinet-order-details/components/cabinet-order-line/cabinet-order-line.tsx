import Link from "next/link";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import {
  CABINET_ORDER_LINE_NAME_CLASS_NAME,
  CABINET_ORDER_LINE_QUANTITY_SEPARATOR,
  CABINET_ORDER_LINE_SKU_PREFIX,
} from "./constants/cabinet-order-line.constants";
import type { CabinetOrderLineProps } from "./types/cabinet-order-line.types";

export const CabinetOrderLine = ({ item, isLast }: CabinetOrderLineProps) => {
  return (
    <div
      className={`flex items-center gap-3 py-3.5 lg:gap-4 ${isLast ? "" : "border-b border-border-soft"}`}
    >
      <ProductThumbnail
        image={item.image}
        alt={item.name}
        sizes="72px"
        className="h-[60px] w-[60px] rounded-xl lg:h-[72px] lg:w-[72px]"
      />

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {item.href ? (
          <Link
            href={item.href}
            className={`${CABINET_ORDER_LINE_NAME_CLASS_NAME} hover:text-accent`}
          >
            {item.name}
          </Link>
        ) : (
          <span className={CABINET_ORDER_LINE_NAME_CLASS_NAME}>{item.name}</span>
        )}
        {item.sku && (
          <span className="text-[12.5px] text-muted-light">
            {CABINET_ORDER_LINE_SKU_PREFIX} {item.sku}
          </span>
        )}
        <span className="text-[12.5px] text-muted">
          {item.quantity}
          {CABINET_ORDER_LINE_QUANTITY_SEPARATOR}
          {formatProductPriceHelper(item.unitPrice)}
        </span>
      </div>

      <span className="flex-none font-heading text-[14.5px] font-semibold text-foreground lg:text-base">
        {formatProductPriceHelper(item.sum)}
      </span>
    </div>
  );
};
