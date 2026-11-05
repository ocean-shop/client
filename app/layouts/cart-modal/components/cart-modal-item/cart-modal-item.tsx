import Link from "next/link";
import { cartStore } from "@/app/shared/cart/cart-store";
import {
  CART_ITEM_MAX_QUANTITY,
  CART_ITEM_MIN_QUANTITY,
} from "@/app/shared/cart/constants/cart.constants";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { calculateProductDiscountPercentHelper } from "@/app/shared/products/helpers/calculate-product-discount-percent";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { QuantityStepper } from "@/app/ui/quantity-stepper/quantity-stepper";
import { CartModalItemMedia } from "./components/cart-modal-item-media/cart-modal-item-media";
import {
  CART_MODAL_ITEM_REMOVE_LABEL,
  CART_MODAL_ITEM_SKU_LABEL,
} from "./constants/cart-modal-item.constants";
import type { CartModalItemProps } from "./types/cart-modal-item.types";

export const CartModalItem = ({ item, onNavigate }: CartModalItemProps) => {
  const href = buildProductHrefHelper(item.productSlug ?? item.productId);
  const discountPercent = calculateProductDiscountPercentHelper(item.price, item.oldPrice);
  const meta =
    item.variationLabel ?? (item.sku ? `${CART_MODAL_ITEM_SKU_LABEL}: ${item.sku}` : null);

  return (
    <div className="flex gap-3 border-b border-surface py-3.5 last:border-b-0 lg:gap-4 lg:py-[18px]">
      <CartModalItemMedia
        href={href}
        name={item.name}
        image={item.image}
        discountPercent={discountPercent}
        onNavigate={onNavigate}
      />

      <div className="flex min-w-0 flex-1 flex-col gap-1.5 lg:gap-2">
        <div className="flex items-start gap-2.5">
          <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
            <Link
              href={href}
              onClick={onNavigate}
              className="text-pretty text-[13.5px] font-medium leading-[1.35] text-foreground hover:text-accent lg:text-[15px]"
            >
              {item.name}
            </Link>
            {meta && <span className="text-[12.5px] text-muted-light">{meta}</span>}
          </div>

          <Button
            variant="unstyled"
            size="auto"
            onClick={() => cartStore.remove(item.id)}
            aria-label={CART_MODAL_ITEM_REMOVE_LABEL}
            className="h-[34px] w-[34px] flex-none rounded-[9px] text-muted-light hover:bg-error-border hover:text-error-dark"
          >
            <MaterialIcon name="delete" className="text-[19px]" />
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <QuantityStepper
            value={item.quantity}
            min={CART_ITEM_MIN_QUANTITY}
            max={CART_ITEM_MAX_QUANTITY}
            onChange={(quantity) => cartStore.setQuantity(item.id, quantity)}
          />

          <div className="flex flex-col items-end gap-px">
            {discountPercent !== undefined && item.oldPrice && (
              <span className="text-[12.5px] text-muted-light line-through">
                {formatProductPriceHelper(Number(item.oldPrice) * item.quantity)}
              </span>
            )}
            <span className="font-heading text-[15px] font-semibold text-foreground lg:text-[17px]">
              {formatProductPriceHelper(Number(item.price) * item.quantity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
