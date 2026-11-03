import { ApiError, apiFetch } from "@/app/core/api/api-fetch";
import { API_JSON_HEADERS } from "@/app/core/api/constants/api.constants";
import {
  DELIVERY_FAILED_STATUS,
  DELIVERY_UNCONFIGURED_STATUS,
  NOVA_POSHTA_ADDRESS_MODEL,
  NOVA_POSHTA_API_URL,
  NOVA_POSHTA_REQUEST_TIMEOUT_MS,
  NOVA_POSHTA_RETRY_ATTEMPTS,
  NOVA_POSHTA_RETRY_DELAY_MS,
} from "../constants/delivery.constants";
import { waitHelper } from "../helpers/wait";
import type { NovaPoshtaResponse } from "../types/delivery.types";

/**
 * Nova Poshta reports failures inside a 200 response, so `success` is checked here. A throttled
 * call is retried once, since typing in the city and branch fields easily trips its rate limit.
 */
export const novaPoshtaFetch = async <T>(
  calledMethod: string,
  methodProperties: Record<string, string>
): Promise<T[]> => {
  const apiKey = process.env.NOVA_POSHTA_API_KEY;

  if (!apiKey) throw new ApiError(DELIVERY_UNCONFIGURED_STATUS);

  for (let attempt = 1; ; attempt++) {
    const response = await apiFetch<NovaPoshtaResponse<T>>(NOVA_POSHTA_API_URL, {
      method: "POST",
      headers: API_JSON_HEADERS,
      body: JSON.stringify({
        apiKey,
        modelName: NOVA_POSHTA_ADDRESS_MODEL,
        calledMethod,
        methodProperties,
      }),
      signal: AbortSignal.timeout(NOVA_POSHTA_REQUEST_TIMEOUT_MS),
    });

    if (response.success) return response.data;
    if (attempt >= NOVA_POSHTA_RETRY_ATTEMPTS) throw new ApiError(DELIVERY_FAILED_STATUS);

    await waitHelper(NOVA_POSHTA_RETRY_DELAY_MS);
  }
};
