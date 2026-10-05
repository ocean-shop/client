import { ApiError, apiFetch } from "@/app/core/api/api-fetch";
import {
  NOVA_POSHTA_ADDRESS_MODEL,
  NOVA_POSHTA_API_URL,
  NOVA_POSHTA_RETRY_ATTEMPTS,
  NOVA_POSHTA_RETRY_DELAY_MS,
} from "../constants/delivery.constants";
import type { NovaPoshtaResponse } from "../types/delivery.types";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Nova Poshta reports failures inside a 200 response, so `success` is checked here. A throttled
 * call is retried once, since typing in the city and branch fields easily trips its rate limit.
 */
export async function novaPoshtaFetch<T>(
  calledMethod: string,
  methodProperties: Record<string, string>
): Promise<T[]> {
  const apiKey = process.env.NOVA_POSHTA_API_KEY;

  if (!apiKey) throw new ApiError(503);

  for (let attempt = 1; ; attempt++) {
    const response = await apiFetch<NovaPoshtaResponse<T>>(NOVA_POSHTA_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey,
        modelName: NOVA_POSHTA_ADDRESS_MODEL,
        calledMethod,
        methodProperties,
      }),
    });

    if (response.success) return response.data;
    if (attempt >= NOVA_POSHTA_RETRY_ATTEMPTS) throw new ApiError(502);

    await wait(NOVA_POSHTA_RETRY_DELAY_MS);
  }
}
