"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useNavigationPendingCount } from "@/app/core/navigation-progress/hooks/use-navigation-pending-count";
import { LinearProgress } from "@/app/ui/linear-progress/linear-progress";

export function LoadingIndicator() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isNavigating = useNavigationPendingCount();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <LinearProgress active={isFetching + isMutating + isNavigating > 0} />
    </div>
  );
}
