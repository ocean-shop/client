import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import { BottomTabBar } from "./layouts/bottom-tab-bar/bottom-tab-bar";
import { CartModal } from "./layouts/cart-modal/cart-modal";
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";
import { QueryProvider } from "./core/providers/query-provider/query-provider";
import { ToastProvider } from "./core/providers/toast-provider/toast-provider";
import { getCatalogCategoryTreeHelper } from "./shared/catalog-categories/helpers/get-catalog-category-tree";
import "./globals.css";

// Subset to the icons used in the app — regenerate with `npm run icons:subset` after adding one.
// "block" hides ligature names (e.g. "shopping_bag") until the font loads instead of flashing them.
const materialSymbolsOutlined = localFont({
  src: "./core/fonts/material-symbols-outlined.woff2",
  variable: "--font-material-symbols",
  display: "block",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Ocean Shop",
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
            <CartModal />
          </QueryProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
