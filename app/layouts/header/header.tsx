import Link from "next/link";
import { CABINET_FAVORITES_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import { AUTH_CABINET_PAGE_PATH } from "@/app/shared/auth/constants/auth.constants";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { getCatalogCategoryTreeHelper } from "@/app/shared/catalog-categories/helpers/get-catalog-category-tree";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { CatalogPanel } from "./components/catalog-panel/catalog-panel";
import { HeaderCart } from "./components/header-cart/header-cart";
import { HeaderSearch } from "./components/header-search/header-search";
import { MobileHeader } from "./components/mobile-header/mobile-header";
import {
  HEADER_BRAND_NAME,
  HEADER_CABINET_LABEL,
  HEADER_FAVORITES_LABEL,
  HEADER_HOME_HREF,
} from "./constants/header.constants";

export const Header = async () => {
  const categoryTree = await getCatalogCategoryTreeHelper();

  return (
    <>
      <MobileHeader categories={categoryTree} />

      <header className="sticky top-0 z-30 hidden lg:block bg-background">
        <div className="mx-auto flex max-w-page items-center gap-7 px-10 py-5">
          <Link href={HEADER_HOME_HREF} className="flex items-center gap-2">
            <MaterialIcon
              name="waves"
              className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-accent text-[17px] text-white"
            />
            <span className="font-heading text-[19px] font-semibold tracking-tight text-foreground">
              {HEADER_BRAND_NAME}
            </span>
          </Link>

          <CatalogPanel categories={categoryTree} />

          <HeaderSearch variant="desktop" />

          <div className="flex items-center gap-[22px] text-sm text-muted">
            {/* The page itself sends guests to sign in and back. */}
            <Link href={CABINET_FAVORITES_PATH} className="hover:text-accent">
              {HEADER_FAVORITES_LABEL}
            </Link>
            <Link href={AUTH_CABINET_PAGE_PATH} className="hover:text-accent">
              {HEADER_CABINET_LABEL}
            </Link>
            <HeaderCart />
          </div>
        </div>

        <div className="border-b border-border-soft">
          <div className="mx-auto flex max-w-page gap-[26px] px-10 pb-4 text-sm text-muted">
            {categoryTree.map((category) => (
              <Link
                key={category.id}
                href={buildCatalogCategoryHrefHelper(category.slug)}
                className="hover:text-accent"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};
