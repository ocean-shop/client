import Link from "next/link";
import { CatalogPanel } from "./components/catalog-panel/catalog-panel";
import { HeaderCart } from "./components/header-cart/header-cart";
import { HeaderSearch } from "./components/header-search/header-search";
import {
  HEADER_BRAND_NAME,
  HEADER_HOME_HREF,
  HEADER_NAV_SALES_ITEM,
} from "./constants/header.constants";
import { MobileHeader } from "./components/mobile-header/mobile-header";
import { getCatalogCategoryTreeHelper } from "@/app/shared/catalog-categories/helpers/get-catalog-category-tree";
import type { HeaderNavItem } from "./types/header.types";

export async function Header() {
  const categoryTree = await getCatalogCategoryTreeHelper();
  const categoryNavItems: HeaderNavItem[] = categoryTree.map((category) => ({
    label: category.name,
    href: `/catalog/${category.slug}`,
  }));
  const navItems = [...categoryNavItems, HEADER_NAV_SALES_ITEM];

  return (
    <>
      <MobileHeader categories={categoryTree} />

      <header className="sticky top-0 z-30 hidden lg:block bg-background">
        <div className="mx-auto flex max-w-page items-center gap-7 px-10 py-5">
          <Link href={HEADER_HOME_HREF} className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-accent font-symbols text-[17px] text-white"
            >
              waves
            </span>
            <span className="font-heading text-[19px] font-semibold tracking-tight text-foreground">
              {HEADER_BRAND_NAME}
            </span>
          </Link>

          <CatalogPanel categories={categoryTree} />

          <HeaderSearch variant="desktop" />

          <div className="flex items-center gap-[22px] text-sm text-muted">
            <span className="cursor-pointer hover:text-accent">Обране</span>
            <span className="cursor-pointer hover:text-accent">Кабінет</span>
            <HeaderCart />
          </div>
        </div>

        <div className="border-b border-border-soft">
          <div className="mx-auto flex max-w-page gap-[26px] px-10 pb-4 text-sm text-muted">
            {navItems.map((item) => (
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
