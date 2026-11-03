import { getApiStatusErrorMessage } from "./helpers/get-api-status-error-message";

export class ApiError extends Error {
  status: number;

  constructor(status: number) {
    super(getApiStatusErrorMessage(status));
    this.name = "ApiError";
    this.status = status;
  }
}

/** The JSON body of a successful response; any other status is thrown as an `ApiError`. */
export const readApiResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) throw new ApiError(response.status);

  return response.json() as Promise<T>;
};

export const apiFetch = async <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> => {
  return readApiResponse<T>(await fetch(input, init));
};
