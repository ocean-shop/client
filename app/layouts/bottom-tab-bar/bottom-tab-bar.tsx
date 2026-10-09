"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AUTH_LOGIN_PAGE_PATH } from "@/app/shared/auth/constants/auth.constants";
import { cartStore } from "@/app/shared/cart/cart-store";
import { useCartOpen } from "@/app/shared/cart/hooks/use-cart-open";
import { useCartQuantity } from "@/app/shared/cart/hooks/use-cart-quantity";
import { Button } from "@/app/ui/button/button";
import { BOTTOM_TAB_BAR_ITEMS } from "./constants/bottom-tab-bar.constants";
import { MobileCatalogPanel } from "./components/mobile-catalog-panel/mobile-catalog-panel";
import type { BottomTabBarProps } from "./types/bottom-tab-bar.types";

export function BottomTabBar({ categories }: BottomTabBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const isCartOpen = useCartOpen();
  const cartQuantity = useCartQuantity();
  const isAccountPage = pathname === AUTH_LOGIN_PAGE_PATH;

  function getItemClickHandler(id: string) {
    if (id === "catalog") return () => setIsCatalogOpen(true);
    if (id === "cart") return cartStore.open;
    if (id === "account") return () => router.push(AUTH_LOGIN_PAGE_PATH);

    return undefined;
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border-soft bg-background px-2 pb-[14px] pt-2 lg:hidden">
        {BOTTOM_TAB_BAR_ITEMS.map((item) => {
          const isCatalog = item.id === "catalog";
          const isCart = item.id === "cart";
          const isAccount = item.id === "account";
          const badge = isCart ? cartQuantity : 0;

          return (
            <Button
              key={item.id}
              variant="unstyled"
              size="auto"
              onClick={getItemClickHandler(item.id)}
              className={`flex-1 flex-col justify-start text-center text-[10.5px] !gap-0 ${
                item.active ||
                (isCatalog && isCatalogOpen) ||
                (isCart && isCartOpen) ||
                (isAccount && isAccountPage)
                  ? "text-accent"
                  : "text-muted-light"
              }`}
            >
              <span className="relative flex">
                <span className="font-symbols text-[20px]">{item.icon}</span>
                {badge > 0 && (
                  <span className="absolute -right-2.5 -top-1 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-accent px-1 text-[10.5px] font-bold text-white">
                    {badge}
                  </span>
                )}
              </span>
              {item.label}
            </Button>
          );
        })}
      </div>

      <MobileCatalogPanel
        categories={categories}
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />
    </>
  );
}
