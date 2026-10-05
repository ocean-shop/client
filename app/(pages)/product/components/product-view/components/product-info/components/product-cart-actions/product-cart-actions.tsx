import { useState } from "react";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "@/app/shared/cart/cart-store";
import {
  CART_ITEM_MAX_QUANTITY,
  CART_ITEM_MIN_QUANTITY,
} from "@/app/shared/cart/constants/cart.constants";
import { buildCartItemHelper } from "@/app/shared/cart/helpers/build-cart-item";
import { notifyCartItemAddedHelper } from "@/app/shared/cart/helpers/notify-cart-item-added";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_CART_ADD_LABEL,
  PRODUCT_CART_DECREASE_LABEL,
  PRODUCT_CART_INCREASE_LABEL,
  PRODUCT_CART_ONE_CLICK_LABEL,
  PRODUCT_CART_ONE_CLICK_TOAST_MESSAGE,
  PRODUCT_CART_ONE_CLICK_TOAST_TITLE,
  PRODUCT_CART_UNAVAILABLE_LABEL,
} from "./constants/product-cart-actions.constants";
import type { ProductCartActionsProps } from "./types/product-cart-actions.types";

export function ProductCartActions({ product, offer }: ProductCartActionsProps) {
  const [quantity, setQuantity] = useState(CART_ITEM_MIN_QUANTITY);
  const isAvailable = offer.available;

  function changeQuantity(step: number) {
    setQuantity((current) =>
      Math.min(CART_ITEM_MAX_QUANTITY, Math.max(CART_ITEM_MIN_QUANTITY, current + step))
    );
  }

  function handleAdd() {
    cartStore.add(buildCartItemHelper(product, offer), quantity);
    notifyCartItemAddedHelper(product.name, quantity);
  }

  function handleOneClick() {
    toastStore.success(PRODUCT_CART_ONE_CLICK_TOAST_TITLE, PRODUCT_CART_ONE_CLICK_TOAST_MESSAGE);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex h-[52px] items-center rounded-xl border border-footer-border bg-background">
        <Button
          variant="unstyled"
          size="auto"
          onClick={() => changeQuantity(-1)}
          disabled={quantity === CART_ITEM_MIN_QUANTITY}
          aria-label={PRODUCT_CART_DECREASE_LABEL}
          className="flex h-full w-[46px] items-center justify-center font-symbols text-xl text-muted"
        >
          remove
        </Button>

        <span className="w-8 text-center text-[15px] font-semibold">{quantity}</span>

        <Button
          variant="unstyled"
          size="auto"
          onClick={() => changeQuantity(1)}
          disabled={quantity === CART_ITEM_MAX_QUANTITY}
          aria-label={PRODUCT_CART_INCREASE_LABEL}
          className="flex h-full w-[46px] items-center justify-center font-symbols text-xl text-muted"
        >
          add
        </Button>
      </div>

      <Button
        onClick={handleAdd}
        disabled={!isAvailable}
        className="h-[52px] min-w-[200px] flex-1 rounded-xl text-[15px]"
      >
        <span className="font-symbols text-xl">shopping_bag</span>
        {isAvailable ? PRODUCT_CART_ADD_LABEL : PRODUCT_CART_UNAVAILABLE_LABEL}
      </Button>

      <Button
        variant="unstyled"
        size="auto"
        onClick={handleOneClick}
        className="h-[52px] rounded-xl border border-accent bg-background px-5 text-[15px] font-semibold text-accent hover:bg-accent-soft"
      >
        {PRODUCT_CART_ONE_CLICK_LABEL}
      </Button>
    </div>
  );
}
