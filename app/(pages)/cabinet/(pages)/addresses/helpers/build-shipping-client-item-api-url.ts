import { buildShippingClientApiUrlHelper } from "./build-shipping-client-api-url";

export const buildShippingClientItemApiUrlHelper = (userId: string, shippingId: string): string =>
  `${buildShippingClientApiUrlHelper(userId)}/${shippingId}`;
