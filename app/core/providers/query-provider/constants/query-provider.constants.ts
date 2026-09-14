import { QueryClientConfig } from "../types/query-provider.types";

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
};
