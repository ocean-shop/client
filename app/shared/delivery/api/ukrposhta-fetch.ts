import { ApiError, apiFetch } from "@/app/core/api/api-fetch";
import {
  DELIVERY_REQUEST_REVALIDATE_SECONDS,
  UKRPOSHTA_API_URL,
} from "../constants/delivery.constants";
import { unwrapUkrposhtaEntriesHelper } from "../helpers/unwrap-ukrposhta-entries";
import type { UkrposhtaEntries } from "../types/delivery.types";

/** The address classifier only answers with the bearer token Ukrposhta issues to the shop. */
export async function ukrposhtaFetch<T>(path: string, searchParams: URLSearchParams): Promise<T[]> {
  const token = process.env.UKRPOSHTA_API_TOKEN;

  if (!token) throw new ApiError(503);

  const response = await apiFetch<UkrposhtaEntries<T>>(
    `${UKRPOSHTA_API_URL}/${path}?${searchParams.toString()}`,
    {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      // Cities and post offices change rarely, and the classifier is slow.
      next: { revalidate: DELIVERY_REQUEST_REVALIDATE_SECONDS },
    }
  );

  return unwrapUkrposhtaEntriesHelper(response);
}
