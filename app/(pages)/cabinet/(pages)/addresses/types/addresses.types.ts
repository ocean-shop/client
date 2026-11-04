import type { ApiActionMessageResult } from "@/app/core/api/types/api.types";
import type { DeliveryCarrier } from "@/app/shared/delivery/types/delivery.types";

/** A saved delivery address as the backend keeps it: the carrier plus one free-form line. */
export type UserShipping = {
  id: string;
  userId: string;
  method: DeliveryCarrier;
  /** "Нова Пошта · Відділення №34: Київ, вул. Хрещатик, 22", the same line an order carries. */
  address: string;
  /** Exactly one address is main; the backend lists it first. */
  isMain: boolean;
  createdAt: string;
  updatedAt: string;
};

/** `address` is at most 255 characters. The user's first address is main whatever `isMain` says. */
export type CreateUserShippingRequest = {
  method: DeliveryCarrier;
  address: string;
  isMain: boolean;
};

export type CreateUserShippingResult = ApiActionMessageResult<{ shipping: UserShipping }>;

/** Result of making an address main or removing it. */
export type UserShippingActionResult = ApiActionMessageResult;

/** A saved address split back into what its card shows. */
export type UserShippingView = {
  id: string;
  icon: string;
  title: string;
  address: string;
  isMain: boolean;
};
