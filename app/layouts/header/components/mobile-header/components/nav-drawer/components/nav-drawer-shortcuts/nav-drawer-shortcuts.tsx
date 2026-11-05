import Link from "next/link";
import { CABINET_FAVORITES_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import { cartStore } from "@/app/shared/cart/cart-store";
import { useCartQuantity } from "@/app/shared/cart/hooks/use-cart-quantity";
import { CountBadge } from "@/app/ui/count-badge/count-badge";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  NAV_DRAWER_SHORTCUTS_CART_LABEL,
  NAV_DRAWER_SHORTCUTS_FAVORITES_LABEL,
  NAV_DRAWER_SHORTCUTS_ROW_CLASS_NAME,
} from "./constants/nav-drawer-shortcuts.constants";
import type { NavDrawerShortcutsProps } from "./types/nav-drawer-shortcuts.types";

export const NavDrawerShortcuts = ({ onClose }: NavDrawerShortcutsProps) => {
  const cartQuantity = useCartQuantity();

  const handleCartClick = () => {
    onClose();
    cartStore.open();
  };

  return (
    <div className="flex shrink-0 flex-col overflow-hidden rounded-[14px] bg-background">
      <div
        role="button"
        onClick={handleCartClick}
        className={`cursor-pointer ${NAV_DRAWER_SHORTCUTS_ROW_CLASS_NAME}`}
      >
        <MaterialIcon name="shopping_bag" className="text-[21px] text-accent" />
        {NAV_DRAWER_SHORTCUTS_CART_LABEL}
        <CountBadge count={cartQuantity} size="lg" className="ml-auto" />
      </div>
      <div className="h-px bg-border-soft" />
      <Link
        href={CABINET_FAVORITES_PATH}
        onClick={onClose}
        className={NAV_DRAWER_SHORTCUTS_ROW_CLASS_NAME}
      >
        <MaterialIcon name="favorite" className="text-[21px] text-accent" />
        {NAV_DRAWER_SHORTCUTS_FAVORITES_LABEL}
      </Link>
    </div>
  );
};
