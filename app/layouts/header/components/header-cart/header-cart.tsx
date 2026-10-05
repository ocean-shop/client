"use client";

import { cartStore } from "@/app/shared/cart/cart-store";
import { useCartQuantity } from "@/app/shared/cart/hooks/use-cart-quantity";
import { Button } from "@/app/ui/button/button";
import { HEADER_CART_LABEL } from "./constants/header-cart.constants";

export function HeaderCart() {
  const quantity = useCartQuantity();

  return (
    <Button
      variant="unstyled"
      size="auto"
      onClick={cartStore.open}
      className="!gap-[7px] font-semibold text-foreground hover:text-accent"
    >
      <span className="font-symbols text-[21px]">shopping_bag</span>
      {HEADER_CART_LABEL}
      {quantity > 0 && (
        <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-accent px-[5px] text-[11px] font-bold text-white">
          {quantity}
        </span>
      )}
    </Button>
  );
}
