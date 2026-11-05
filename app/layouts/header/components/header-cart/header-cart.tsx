"use client";

import { cartStore } from "@/app/shared/cart/cart-store";
import { useCartQuantity } from "@/app/shared/cart/hooks/use-cart-quantity";
import { Button } from "@/app/ui/button/button";
import { CountBadge } from "@/app/ui/count-badge/count-badge";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { HEADER_CART_LABEL } from "./constants/header-cart.constants";

export const HeaderCart = () => {
  const quantity = useCartQuantity();

  return (
    <Button
      variant="unstyled"
      size="auto"
      onClick={cartStore.open}
      className="!gap-[7px] font-semibold text-foreground hover:text-accent"
    >
      <MaterialIcon name="shopping_bag" className="text-[21px]" />
      {HEADER_CART_LABEL}
      <CountBadge count={quantity} size="md" />
    </Button>
  );
};
