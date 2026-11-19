import type { ApiActionMessageResult } from "@/app/core/api/types/api.types";

/** What the buyer submits from the "Купити в 1 клік" form; `shopId` is added on the server. */
export type ProductQuickOrderInput = {
  productId: string;
  name: string;
  phone: string;
};

/** Body of `POST quick-orders-client`. */
export type ProductQuickOrderRequest = ProductQuickOrderInput & {
  shopId: string;
};

export type ProductQuickOrderField = "name" | "phone";

export type ProductQuickOrderErrors = Partial<Record<ProductQuickOrderField, string | null>>;

export type ProductQuickOrderResult = ApiActionMessageResult;
