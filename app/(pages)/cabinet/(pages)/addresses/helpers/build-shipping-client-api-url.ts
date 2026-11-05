import { SHIPPING_CLIENT_API_URL } from "../constants/addresses.constants";

/** The user's addresses: `GET` lists them, `POST` adds one. */
export const buildShippingClientApiUrlHelper = (userId: string): string =>
  `${SHIPPING_CLIENT_API_URL}/${userId}`;
