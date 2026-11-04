"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { LoadingIndicator } from "./components/loading-indicator/loading-indicator";
import { createQueryClient } from "./helpers/create-query-client";
import type { QueryProviderProps } from "./types/query-provider.types";

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const [queryClient] = useState(createQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingIndicator />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
