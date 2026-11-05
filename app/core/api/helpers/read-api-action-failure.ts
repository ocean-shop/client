import type { ApiActionMessageFailure } from "../types/api.types";
import { getApiErrorMessage } from "./get-api-error-message";

/** What a server action hands back for a response that is not ok. */
export const readApiActionFailure = async (
  response: Response
): Promise<ApiActionMessageFailure> => {
  return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
};
