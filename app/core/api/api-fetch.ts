import { readApiResponse } from "./helpers/read-api-response";

export const apiFetch = async <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> => {
  return readApiResponse<T>(await fetch(input, init));
};
