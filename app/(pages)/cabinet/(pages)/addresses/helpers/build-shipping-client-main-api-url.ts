import { buildShippingClientItemApiUrlHelper } from "./build-shipping-client-item-api-url";

export const buildShippingClientMainApiUrlHelper = (userId: string, shippingId: string): string =>
  `${buildShippingClientItemApiUrlHelper(userId, shippingId)}/main`;
