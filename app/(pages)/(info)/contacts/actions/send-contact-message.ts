"use server";

import { API_JSON_HEADERS } from "@/app/core/api/constants/api.constants";
import { CONTACTS_CLIENT_API_URL } from "../constants/contacts.constants";
import type { SendContactMessageRequest, SendContactMessageResult } from "../types/contacts.types";

/** Sends a "Contact us" message to the admin email. Open to guests, so no session is needed. */
export const sendContactMessageAction = async (
  body: SendContactMessageRequest
): Promise<SendContactMessageResult> => {
  const response = await fetch(CONTACTS_CLIENT_API_URL, {
    method: "POST",
    headers: API_JSON_HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true };
};
