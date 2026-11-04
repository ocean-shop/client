import { ORDERS_CLIENT_API_URL } from "@/app/shared/orders/constants/orders.constants";

export const buildUserOrderApiUrlHelper = (orderId: string): string =>
  `${ORDERS_CLIENT_API_URL}/${orderId}`;
