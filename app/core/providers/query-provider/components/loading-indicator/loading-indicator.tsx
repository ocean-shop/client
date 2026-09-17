"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { LinearProgress } from "@/app/ui/linear-progress/linear-progress";

export function LoadingIndicator() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <LinearProgress active={isFetching + isMutating > 0} />
    </div>
  );
}
