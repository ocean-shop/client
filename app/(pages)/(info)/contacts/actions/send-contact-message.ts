"use server";

import { CONTACTS_CLIENT_API_URL, CONTACTS_REQUEST_HEADERS } from "../constants/contacts.constants";
import type { SendContactMessageRequest, SendContactMessageResult } from "../types/contacts.types";

/** Sends a "Contact us" message to the admin email. Open to guests, so no session is needed. */
export async function sendContactMessageAction(
  body: SendContactMessageRequest
): Promise<SendContactMessageResult> {
  const response = await fetch(CONTACTS_CLIENT_API_URL, {
    method: "POST",
    headers: CONTACTS_REQUEST_HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) return { ok: false, status: response.status };

  return { ok: true };
}
