import { formatCheckoutItemMetaHelper } from "@/app/(pages)/checkout/helpers/format-checkout-item-meta";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import type { CheckoutSuccessItemProps } from "./types/checkout-success-item.types";

export const CheckoutSuccessItem = ({ item }: CheckoutSuccessItemProps) => {
  return (
    <div className="flex items-center gap-3 border-b border-surface py-3">
      <ProductThumbnail
        image={item.image}
        alt={item.name}
        sizes="56px"
        className="h-[52px] w-[52px] rounded-[10px] lg:h-14 lg:w-14"
      />

      <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
        <span className="text-[13.5px] font-medium leading-[1.35] text-foreground lg:text-sm">
          {item.name}
        </span>
        <span className="text-[12.5px] text-muted-light">{formatCheckoutItemMetaHelper(item)}</span>
      </div>

      <span className="whitespace-nowrap text-sm font-semibold text-foreground">
        {formatProductPriceHelper(Number(item.price) * item.quantity)}
      </span>
    </div>
  );
};
