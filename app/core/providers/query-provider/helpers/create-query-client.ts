import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { QUERY_CLIENT_DEFAULT_OPTIONS } from "../constants/query-provider.constants";
import { handleApiError } from "./handle-api-error";

/** Caches are created per client, so server renders of different requests never share one. */
export const createQueryClient = () => {
  return new QueryClient({
    queryCache: new QueryCache({ onError: handleApiError }),
    mutationCache: new MutationCache({ onError: handleApiError }),
    defaultOptions: QUERY_CLIENT_DEFAULT_OPTIONS,
  });
};
