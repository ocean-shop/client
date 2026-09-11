import Link from "next/link";
import { CatalogPanel } from "./catalog-panel/catalog-panel";
import {
  HEADER_BRAND_NAME,
  HEADER_CART_COUNT,
  HEADER_NAV_ITEMS,
  HEADER_SEARCH_PLACEHOLDER,
} from "./constants/header.constants";
import { MobileHeader } from "./mobile-header/mobile-header";

export function Header() {
  return (
    <>
      <MobileHeader />

      <header className="hidden lg:block bg-background">
        <div className="mx-auto flex max-w-page items-center gap-7 px-10 py-5">
          <div className="flex items-center gap-2">
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-accent font-symbols text-[17px] text-white">
              waves
            </span>
            <span className="font-heading text-[19px] font-semibold tracking-tight text-foreground">
              {HEADER_BRAND_NAME}
            </span>
          </div>

          <CatalogPanel />

          <div className="flex h-[42px] flex-1 items-center gap-2.5 rounded-[10px] border border-border-soft bg-surface px-4">
            <span className="font-symbols text-[19px] text-muted">search</span>
            <span className="text-sm text-muted-light">{HEADER_SEARCH_PLACEHOLDER}</span>
          </div>

          <div className="flex items-center gap-[22px] text-sm text-muted">
            <span className="cursor-pointer hover:text-accent">Обране</span>
            <span className="cursor-pointer hover:text-accent">Кабінет</span>
            <div className="flex cursor-pointer items-center gap-[7px] font-semibold text-foreground">
              <span className="font-symbols text-[21px]">shopping_bag</span>
              Кошик
              <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-accent px-[5px] text-[11px] font-bold text-white">
                {HEADER_CART_COUNT}
              </span>
            </div>
          </div>
        </div>

        <div className="border-b border-border-soft">
          <div className="mx-auto flex max-w-page gap-[26px] px-10 pb-4 text-sm text-muted">
            {HEADER_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.active
                    ? "border-b-2 border-accent pb-0.5 font-semibold text-accent"
                    : "hover:text-accent"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
