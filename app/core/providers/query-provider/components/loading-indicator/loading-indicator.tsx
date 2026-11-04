"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useNavigationPendingCount } from "@/app/core/navigation-progress/hooks/use-navigation-pending-count";
import { LinearProgress } from "@/app/ui/linear-progress/linear-progress";

export const LoadingIndicator = () => {
  const fetchingCount = useIsFetching();
  const mutatingCount = useIsMutating();
  const navigatingCount = useNavigationPendingCount();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <LinearProgress active={fetchingCount + mutatingCount + navigatingCount > 0} />
    </div>
  );
};
