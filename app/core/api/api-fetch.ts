import { API_ERROR_MESSAGES, DEFAULT_API_ERROR_MESSAGE } from "./constants/api.constants";

export class ApiError extends Error {
  status: number;

  constructor(status: number) {
    super(API_ERROR_MESSAGES[status] ?? DEFAULT_API_ERROR_MESSAGE);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiFetch<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);

  if (!response.ok) throw new ApiError(response.status);

  return response.json() as Promise<T>;
}
