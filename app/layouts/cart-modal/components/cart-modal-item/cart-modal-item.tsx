import Image from "next/image";
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
import {
  CART_MODAL_ITEM_DECREASE_LABEL,
  CART_MODAL_ITEM_INCREASE_LABEL,
  CART_MODAL_ITEM_REMOVE_LABEL,
  CART_MODAL_ITEM_SKU_LABEL,
  CART_MODAL_ITEM_STEPPER_BUTTON_CLASS_NAME,
} from "./constants/cart-modal-item.constants";
import type { CartModalItemProps } from "./types/cart-modal-item.types";

export function CartModalItem({ item, onNavigate }: CartModalItemProps) {
  const href = buildProductHrefHelper(item.productId);
  const discountPercent = calculateProductDiscountPercentHelper(item.price, item.oldPrice);
  const meta =
    item.variationLabel ?? (item.sku ? `${CART_MODAL_ITEM_SKU_LABEL}: ${item.sku}` : null);

  return (
    <div className="flex gap-3 border-b border-surface py-3.5 last:border-b-0 lg:gap-4 lg:py-[18px]">
      <Link
        href={href}
        onClick={onNavigate}
        aria-label={item.name}
        className="relative h-[72px] w-[72px] flex-none overflow-hidden rounded-xl bg-footer lg:h-[88px] lg:w-[88px]"
      >
        {item.image && (
          <Image src={item.image} alt={item.name} fill sizes="88px" className="object-cover" />
        )}

        {discountPercent !== undefined && (
          <span className="absolute left-1.5 top-1.5 rounded-[5px] bg-background px-1.5 py-0.5 text-[10.5px] font-bold text-accent">
            −{discountPercent}%
          </span>
        )}
      </Link>

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
            <span className="font-symbols text-[19px]">delete</span>
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <div className="flex h-[38px] items-center rounded-[10px] border border-footer-border lg:h-10">
            <Button
              variant="unstyled"
              size="auto"
              onClick={() => cartStore.setQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= CART_ITEM_MIN_QUANTITY}
              aria-label={CART_MODAL_ITEM_DECREASE_LABEL}
              className={CART_MODAL_ITEM_STEPPER_BUTTON_CLASS_NAME}
            >
              <span className="font-symbols text-lg">remove</span>
            </Button>

            <span className="w-[26px] text-center text-[14.5px] font-semibold">
              {item.quantity}
            </span>

            <Button
              variant="unstyled"
              size="auto"
              onClick={() => cartStore.setQuantity(item.id, item.quantity + 1)}
              disabled={item.quantity >= CART_ITEM_MAX_QUANTITY}
              aria-label={CART_MODAL_ITEM_INCREASE_LABEL}
              className={CART_MODAL_ITEM_STEPPER_BUTTON_CLASS_NAME}
            >
              <span className="font-symbols text-lg">add</span>
            </Button>
          </div>

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
}
