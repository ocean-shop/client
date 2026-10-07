import Image from "next/image";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { CHECKOUT_SUCCESS_ITEM_QUANTITY_LABEL } from "./constants/checkout-success-item.constants";
import type { CheckoutSuccessItemProps } from "./types/checkout-success-item.types";

export function CheckoutSuccessItem({ item }: CheckoutSuccessItemProps) {
  return (
    <div className="flex items-center gap-3 border-b border-surface py-3">
      <div className="relative h-[52px] w-[52px] flex-none overflow-hidden rounded-[10px] bg-footer lg:h-14 lg:w-14">
        {item.image && (
          <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
        <span className="text-[13.5px] font-medium leading-[1.35] text-foreground lg:text-sm">
          {item.name}
        </span>
        <span className="text-[12.5px] text-muted-light">
          {item.variationLabel && `${item.variationLabel} · `}
          {CHECKOUT_SUCCESS_ITEM_QUANTITY_LABEL(item.quantity)}
        </span>
      </div>

      <span className="whitespace-nowrap text-sm font-semibold text-foreground">
        {formatProductPriceHelper(Number(item.price) * item.quantity)}
      </span>
    </div>
  );
}
