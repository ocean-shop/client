import type { Metadata } from "next";
import localFont from "next/font/local";
import { BottomTabBar } from "./layouts/bottom-tab-bar/bottom-tab-bar";
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";
import { LazyCartModal } from "./layouts/lazy-cart-modal/lazy-cart-modal";
import { QueryProvider } from "./core/providers/query-provider/query-provider";
import { ShopFeaturesProvider } from "./core/providers/shop-features-provider/shop-features-provider";
import { ToastProvider } from "./core/providers/toast-provider/toast-provider";
import { getCatalogCategoryTreeHelper } from "./shared/catalog-categories/helpers/get-catalog-category-tree";
import {
  SEO_DEFAULT_OPEN_GRAPH,
  SEO_OG_IMAGE_PATH,
  SEO_SHARE_TITLE,
  SEO_TITLE_TEMPLATE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./shared/seo/constants/seo.constants";
import { buildSiteJsonLdHelper } from "./shared/seo/helpers/build-site-json-ld";
import { getShopSettings } from "./shared/shop-settings/api/get-shop-settings";
import { buildShopThemeStyleHelper } from "./shared/shop-settings/helpers/build-shop-theme-style";
import { JsonLd } from "./ui/json-ld/json-ld";
import "./globals.css";

// Subset to the icons used in the app — regenerate with `npm run icons:subset` after adding one.
// "block" hides ligature names (e.g. "shopping_bag") until the font loads instead of flashing them.
const materialSymbolsOutlined = localFont({
  src: "./core/fonts/material-symbols-outlined.woff2",
  variable: "--font-material-symbols",
  display: "block",
});

// Self-hosted single-file subsets (Latin + Cyrillic + "₴") — regenerate with `npm run fonts:subset`.
const inter = localFont({
  src: "./core/fonts/inter.woff2",
  variable: "--font-inter",
  weight: "400 700",
  display: "swap",
});

const unbounded = localFont({
  src: "./core/fonts/unbounded.woff2",
  variable: "--font-unbounded",
  weight: "500 600",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: SEO_TITLE_TEMPLATE },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: SEO_DEFAULT_OPEN_GRAPH,
  twitter: {
    card: "summary",
    title: SEO_SHARE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SEO_OG_IMAGE_PATH],
  },
};

const RootLayout = async ({ children }: LayoutProps<"/">) => {
  // Both reads come from the Next data cache, so fetching them side by side adds no wait.
  const [categoryTree, shopSettings] = await Promise.all([
    getCatalogCategoryTreeHelper(),
    getShopSettings(),
  ]);

  return (
    <html
      lang="uk"
      className={`${inter.variable} ${unbounded.variable} ${materialSymbolsOutlined.variable} h-full antialiased`}
      style={buildShopThemeStyleHelper(shopSettings.colorScheme)}
    >
      <body className="min-h-full flex flex-col pb-[78px] lg:pb-0">
        <JsonLd data={buildSiteJsonLdHelper()} />
        <ShopFeaturesProvider features={shopSettings.features}>
          <ToastProvider>
            <QueryProvider>
              <Header />
              {/* Grows to fill short pages so the footer stays at the bottom of the viewport. */}
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer features={shopSettings.features} />
              <BottomTabBar categories={categoryTree} />
              <LazyCartModal />
            </QueryProvider>
          </ToastProvider>
        </ShopFeaturesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
