import { MutationCache, QueryCache } from "@tanstack/react-query";
import { handleApiError } from "../handle-api-error";
import { QueryClientConfig } from "../types/query-provider.types";

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  queryCache: new QueryCache({ onError: handleApiError }),
  mutationCache: new MutationCache({ onError: handleApiError }),
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
};
