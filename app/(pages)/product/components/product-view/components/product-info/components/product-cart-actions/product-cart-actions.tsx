import { useState } from "react";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { cartStore } from "@/app/shared/cart/cart-store";
import {
  CART_ITEM_MAX_QUANTITY,
  CART_ITEM_MIN_QUANTITY,
} from "@/app/shared/cart/constants/cart.constants";
import { buildCartItemHelper } from "@/app/shared/cart/helpers/build-cart-item";
import { notifyCartItemAddedHelper } from "@/app/shared/cart/helpers/notify-cart-item-added";
import { PRODUCT_UNAVAILABLE_LABEL } from "@/app/shared/products/constants/products.constants";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { QuantityStepper } from "@/app/ui/quantity-stepper/quantity-stepper";
import {
  PRODUCT_CART_ADD_LABEL,
  PRODUCT_CART_ONE_CLICK_ENABLED,
  PRODUCT_CART_ONE_CLICK_LABEL,
  PRODUCT_CART_ONE_CLICK_TOAST_MESSAGE,
  PRODUCT_CART_ONE_CLICK_TOAST_TITLE,
} from "./constants/product-cart-actions.constants";
import type { ProductCartActionsProps } from "./types/product-cart-actions.types";

export const ProductCartActions = ({ product, offer }: ProductCartActionsProps) => {
  const [quantity, setQuantity] = useState(CART_ITEM_MIN_QUANTITY);
  const isAvailable = offer.available;

  const handleAdd = () => {
    cartStore.add(buildCartItemHelper(product, offer), quantity);
    notifyCartItemAddedHelper(product.name, quantity);
  };

  const handleOneClick = () => {
    toastStore.success(PRODUCT_CART_ONE_CLICK_TOAST_TITLE, PRODUCT_CART_ONE_CLICK_TOAST_MESSAGE);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <QuantityStepper
        value={quantity}
        min={CART_ITEM_MIN_QUANTITY}
        max={CART_ITEM_MAX_QUANTITY}
        size="lg"
        onChange={setQuantity}
      />

      <Button
        size="xl"
        onClick={handleAdd}
        disabled={!isAvailable}
        className="min-w-[200px] flex-1"
      >
        <MaterialIcon name="shopping_bag" className="text-xl" />
        {isAvailable ? PRODUCT_CART_ADD_LABEL : PRODUCT_UNAVAILABLE_LABEL}
      </Button>

      {PRODUCT_CART_ONE_CLICK_ENABLED && (
        <Button
          variant="unstyled"
          size="auto"
          onClick={handleOneClick}
          className="h-[52px] rounded-xl border border-accent bg-background px-5 text-[15px] font-semibold text-accent hover:bg-accent-soft"
        >
          {PRODUCT_CART_ONE_CLICK_LABEL}
        </Button>
      )}
    </div>
  );
};
