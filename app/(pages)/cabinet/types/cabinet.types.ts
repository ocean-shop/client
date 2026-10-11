import type { OrderStatus } from "@/app/shared/orders/types/orders.types";

export type CabinetMenuItem = {
  href: string;
  icon: string;
  label: string;
  /** Fits the narrow segmented control on mobile. */
  shortLabel: string;
};

/** How the user is presented in the cabinet; the backend keeps no name, only email and phone. */
export type CabinetUserDisplay = {
  title: string;
  subtitle: string | null;
  /** First letter of the email, or `null` to fall back to an icon. */
  initial: string | null;
};

export type CabinetOrderItemPreview = {
  id: string;
  name: string;
  image: string | null;
};

/** An order still on its way to the user. */
export type CabinetActiveOrder = {
  id: string;
  number: string;
  totalAmount: number;
  status: Exclude<OrderStatus, "cancelled">;
  shippingNote: string;
  /** Already formatted, e.g. "9 жовтня". */
  expectedDelivery: string | null;
  items: CabinetOrderItemPreview[];
  trackingHref: string | null;
};

export type CabinetFavoriteProduct = {
  id: string;
  name: string;
  price: number;
  image: string | null;
  href: string;
};

export type CabinetAddress = {
  title: string;
  address: string;
};

export type CabinetOverview = {
  activeOrder: CabinetActiveOrder | null;
  ordersCount: number;
  favorites: CabinetFavoriteProduct[];
  favoritesCount: number;
  mainAddress: CabinetAddress | null;
};
