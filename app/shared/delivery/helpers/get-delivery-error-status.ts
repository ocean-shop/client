import { ApiError } from "@/app/core/api/api-fetch";
import {
  DELIVERY_FAILED_STATUS,
  DELIVERY_TIMEOUT_ERROR_NAME,
  DELIVERY_TIMEOUT_STATUS,
} from "../constants/delivery.constants";

/** The HTTP status a failed carrier call stands for, including one that timed out or never connected. */
export const getDeliveryErrorStatusHelper = (error: unknown): number => {
  if (error instanceof ApiError) return error.status;
  if (error instanceof Error && error.name === DELIVERY_TIMEOUT_ERROR_NAME) {
    return DELIVERY_TIMEOUT_STATUS;
  }

  return DELIVERY_FAILED_STATUS;
};
