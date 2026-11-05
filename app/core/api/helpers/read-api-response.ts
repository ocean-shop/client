import { ApiError } from "../api-error";

/** The JSON body of a successful response; any other status is thrown as an `ApiError`. */
export const readApiResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) throw new ApiError(response.status);

  return response.json() as Promise<T>;
};
