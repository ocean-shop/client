import type { Metadata } from "next";
import localFont from "next/font/local";
import { BottomTabBar } from "./layouts/bottom-tab-bar/bottom-tab-bar";
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";
import { LazyCartModal } from "./layouts/lazy-cart-modal/lazy-cart-modal";
import { QueryProvider } from "./core/providers/query-provider/query-provider";
import { ToastProvider } from "./core/providers/toast-provider/toast-provider";
import { getCatalogCategoryTreeHelper } from "./shared/catalog-categories/helpers/get-catalog-category-tree";
import { SITE_NAME, SITE_URL } from "./shared/seo/constants/seo.constants";
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
  title: SITE_NAME,
  description:
    "Ocean Shop — інтернет-магазин смартфонів, планшетів, ноутбуків та аксесуарів з доставкою по Україні.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const categoryTree = await getCatalogCategoryTreeHelper();

  return (
    <html
      lang="uk"
      className={`${inter.variable} ${unbounded.variable} ${materialSymbolsOutlined.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-[78px] lg:pb-0">
        <ToastProvider>
          <QueryProvider>
            <Header />
            {/* Grows to fill short pages so the footer stays at the bottom of the viewport. */}
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
            <BottomTabBar categories={categoryTree} />
            <LazyCartModal />
          </QueryProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
