import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";

export const SHIPPING_CLIENT_API_URL = `${process.env.API_BASE_URL}/user/client/shipping`;

export const getShippingClientApiUrl = (userId: string) => `${SHIPPING_CLIENT_API_URL}/${userId}`;

export const getShippingClientItemApiUrl = (userId: string, shippingId: string) =>
  `${getShippingClientApiUrl(userId)}/${shippingId}`;

export const getShippingClientMainApiUrl = (userId: string, shippingId: string) =>
  `${getShippingClientItemApiUrl(userId, shippingId)}/main`;

export const SHIPPING_REQUEST_HEADERS = { "Content-Type": "application/json" };

/** Splits the stored line into the card's title and address, the way checkout joins them. */
export const SHIPPING_ADDRESS_SEPARATOR = ": ";
export const SHIPPING_ADDRESS_MAX_LENGTH = 255;

export const SHIPPING_CARRIER_LABELS: Record<DeliveryCarrier, string> = {
  nova: "Нова Пошта",
  ukr: "Укрпошта",
};

export const SHIPPING_CARRIER_ICONS: Record<DeliveryCarrier, string> = {
  nova: "local_shipping",
  ukr: "markunread_mailbox",
};
