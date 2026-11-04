"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

/** Moves a paginated cabinet list to another page, reporting while the new one is loading. */
export const useCabinetPagination = (path: string, pageSearchParam: string) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (nextPage: number) => {
    startTransition(() => {
      router.push(`${path}?${pageSearchParam}=${nextPage}`);
    });
  };

  return { isPending, handlePageChange };
};
