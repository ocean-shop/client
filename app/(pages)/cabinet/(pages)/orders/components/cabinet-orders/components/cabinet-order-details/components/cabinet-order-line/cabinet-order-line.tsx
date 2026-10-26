import Image from "next/image";
import Link from "next/link";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import {
  CABINET_ORDER_LINE_QUANTITY_SEPARATOR,
  CABINET_ORDER_LINE_SKU_PREFIX,
} from "./constants/cabinet-order-line.constants";
import type { CabinetOrderLineProps } from "./types/cabinet-order-line.types";

export const CabinetOrderLine = ({ item, isLast }: CabinetOrderLineProps) => {
  return (
    <div
      className={`flex items-center gap-3 py-3.5 lg:gap-4 ${isLast ? "" : "border-b border-border-soft"}`}
    >
      <div className="relative h-[60px] w-[60px] flex-none overflow-hidden rounded-xl bg-footer lg:h-[72px] lg:w-[72px]">
        {item.image && (
          <Image src={item.image} alt={item.name} fill sizes="72px" className="object-cover" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {item.href ? (
          <Link
            href={item.href}
            className="text-[13.5px] font-medium leading-[1.35] text-foreground hover:text-accent lg:text-[14.5px]"
          >
            {item.name}
          </Link>
        ) : (
          <span className="text-[13.5px] font-medium leading-[1.35] text-foreground lg:text-[14.5px]">
            {item.name}
          </span>
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
