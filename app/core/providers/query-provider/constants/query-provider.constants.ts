import type { DefaultOptions } from "@tanstack/react-query";

export const QUERY_CLIENT_DEFAULT_OPTIONS: DefaultOptions = {
  queries: {
    staleTime: 60 * 1000,
  },
};
