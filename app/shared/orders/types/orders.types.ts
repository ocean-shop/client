import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";

/** Mirrors the backend's `paymentMethod` enum. */
export type OrderPaymentMethod = "card" | "cod";

export type CreateOrderItemRequest = {
  productId: string;
  unitPrice: number;
  quantity: number;
};

/** Amounts are plain numbers with at most two decimals, which the backend enforces. */
export type CreateOrderRequest = {
  shopId: string;
  /** Free-form delivery destination: carrier, branch or street, and city. */
  shippingNumber: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  phoneNumber?: string;
  subtotalAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentMethod: OrderPaymentMethod;
  shippingMethod: DeliveryCarrier;
  items: CreateOrderItemRequest[];
};

/** `shopId` is server-only configuration, so the action fills it in. */
export type CreateOrderInput = Omit<CreateOrderRequest, "shopId">;

export type Order = {
  id: string;
  orderNumber: string | null;
  totalAmount: string;
  createdAt: string;
};

/** A server action cannot throw a typed error to the client, so a failure carries its status. */
export type CreateOrderResult = { ok: true; order: Order } | { ok: false; status: number };
