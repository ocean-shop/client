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

export type CheckoutCarrierOption = {
  id: DeliveryCarrier;
  label: string;
  note: string;
  methods: CheckoutDeliveryMethodOption[];
  codFee: CheckoutCodFee;
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
