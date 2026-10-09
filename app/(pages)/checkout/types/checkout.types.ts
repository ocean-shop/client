import type { CartItem, CartTotals } from "@/app/shared/cart/types/cart.types";
import type {
  DeliveryCarrier,
  DeliveryCity,
  DeliveryMethod,
  DeliveryPoint,
} from "@/app/shared/delivery/types/delivery.types";

export type CheckoutContact = {
  name: string;
  email: string;
  phone: string;
};

export type CheckoutDelivery = {
  city: DeliveryCity;
  carrier: DeliveryCarrier;
  method: DeliveryMethod;
  /** The chosen branch or parcel locker; unused for courier delivery. */
  point: DeliveryPoint | null;
  street: string;
  apartment: string;
};

export type CheckoutPaymentMethod = "card" | "wallet" | "installments" | "cod" | "invoice";

export type CheckoutDeliveryMethodOption = {
  id: DeliveryMethod;
  label: string;
  icon: string;
  price: number;
};

/** Cash on delivery costs a fixed fee plus a share of the amount collected. */
export type CheckoutCodFee = {
  fixed: number;
  percent: number;
};

/** How many days after the order the parcel usually arrives. */
export type CheckoutDeliveryDays = {
  min: number;
  max: number;
};

export type CheckoutCarrierOption = {
  id: DeliveryCarrier;
  label: string;
  note: string;
  methods: CheckoutDeliveryMethodOption[];
  codFee: CheckoutCodFee;
  deliveryDays: CheckoutDeliveryDays;
};

export type CheckoutPaymentOption = {
  id: CheckoutPaymentMethod;
  label: string;
  note: string;
  /** A Material Symbols icon name, or short text such as "0%", depending on `badgeType`. */
  badge: string;
  badgeType: "icon" | "text";
};

export type CheckoutTotals = {
  shipping: number;
  codFee: number;
  total: number;
};

/** Everything the form holds at the moment the order is placed. */
export type CheckoutOrderDraft = {
  contact: CheckoutContact;
  delivery: CheckoutDelivery;
  payment: CheckoutPaymentMethod;
  items: CartItem[];
  cartTotals: CartTotals;
  totals: CheckoutTotals;
};

export type CheckoutDeliveryAddress = {
  /** Carrier with the branch, parcel locker or courier, e.g. "Нова Пошта · Відділення №34". */
  title: string;
  /** City with the branch's or the courier's street address. */
  address: string;
};

/**
 * What the success page shows. The cart is cleared once the order is placed and orders can only
 * be read back with staff rights, so the page renders this copy kept in browser storage.
 */
export type CheckoutPlacedOrder = {
  id: string;
  number: string;
  email: string;
  delivery: CheckoutDelivery;
  payment: CheckoutPaymentMethod;
  items: CartItem[];
  total: number;
  placedAt: string;
};
