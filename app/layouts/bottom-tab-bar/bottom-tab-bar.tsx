"use client";

import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CABINET_FAVORITES_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import { HEADER_HOME_HREF } from "@/app/layouts/header/constants/header.constants";
import { AUTH_CABINET_PAGE_PATH } from "@/app/shared/auth/constants/auth.constants";
import { cartStore } from "@/app/shared/cart/cart-store";
import { useCartOpen } from "@/app/shared/cart/hooks/use-cart-open";
import { useCartQuantity } from "@/app/shared/cart/hooks/use-cart-quantity";
import { BottomTabBarItem } from "./components/bottom-tab-bar-item/bottom-tab-bar-item";
import { BOTTOM_TAB_BAR_ITEMS } from "./constants/bottom-tab-bar.constants";
import { getBottomTabBarActiveItemsHelper } from "./helpers/get-bottom-tab-bar-active-items";
import type { BottomTabBarItemId, BottomTabBarProps } from "./types/bottom-tab-bar.types";

// Starts closed, so it skips the server HTML and loads in its own chunk after hydration.
const MobileCatalogPanel = dynamic(
  () =>
    import("./components/mobile-catalog-panel/mobile-catalog-panel").then(
      (module) => module.MobileCatalogPanel
    ),
  { ssr: false }
);

export const BottomTabBar = ({ categories }: BottomTabBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const isCartOpen = useCartOpen();
  const cartQuantity = useCartQuantity();
  const activeItems = getBottomTabBarActiveItemsHelper({ pathname, isCatalogOpen, isCartOpen });

  const itemClickHandlers: Record<BottomTabBarItemId, () => void> = {
    home: () => router.push(HEADER_HOME_HREF),
    catalog: () => setIsCatalogOpen(true),
    cart: cartStore.open,
    favorites: () => router.push(CABINET_FAVORITES_PATH),
    account: () => router.push(AUTH_CABINET_PAGE_PATH),
  };

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border-soft bg-background px-2 pb-[14px] pt-2 lg:hidden">
        {BOTTOM_TAB_BAR_ITEMS.map((item) => (
          <BottomTabBarItem
            key={item.id}
            item={item}
            isActive={activeItems[item.id]}
            badgeCount={item.id === "cart" ? cartQuantity : 0}
            onClick={itemClickHandlers[item.id]}
          />
        ))}
      </div>

      <MobileCatalogPanel
        categories={categories}
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </>
  );
};
