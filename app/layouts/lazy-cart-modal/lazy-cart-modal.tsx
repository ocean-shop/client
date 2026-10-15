"use client";

import dynamic from "next/dynamic";

/**
 * The cart modal starts closed, so it is left out of the server HTML and its code loads in a
 * separate chunk after hydration — keeping it off the main thread during the first load.
 */
export const LazyCartModal = dynamic(
  () => import("../cart-modal/cart-modal").then((module) => module.CartModal),
  { ssr: false }
);
