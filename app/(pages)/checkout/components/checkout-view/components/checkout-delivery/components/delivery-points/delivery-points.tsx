"use client";

import { useState } from "react";
import { FORM_FIELD_LABEL_CLASS_NAME } from "@/app/ui/form-field/constants/form-field.constants";
import { DeliveryManualPoint } from "./components/delivery-manual-point/delivery-manual-point";
import { DeliveryPointsList } from "./components/delivery-points-list/delivery-points-list";
import { DeliveryPointsSearch } from "./components/delivery-points-search/delivery-points-search";
import { DeliveryPointsSkeleton } from "./components/delivery-points-skeleton/delivery-points-skeleton";
import {
  DELIVERY_POINTS_EMPTY_LABEL,
  DELIVERY_POINTS_ERROR_LABEL,
  DELIVERY_POINTS_TITLES,
} from "./constants/delivery-points.constants";
import { getVisibleDeliveryPointsHelper } from "./helpers/get-visible-delivery-points";
import { useDeliveryPoints } from "./hooks/use-delivery-points";
import type { DeliveryPointsProps } from "./types/delivery-points.types";

export const DeliveryPoints = ({
  carrier,
  method,
  city,
  selectedPoint,
  onSelect,
  manualPoint,
  onManualPointChange,
}: DeliveryPointsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { points, isLoading, isError, isStale } = useDeliveryPoints({
    carrier,
    method,
    city,
    searchTerm,
  });

  const hasFailed = isError && !points;
  // Whatever was typed in by hand stays in view should the list load later, until a point is picked.
  const isManual = hasFailed || manualPoint !== null;
  const visiblePoints = getVisibleDeliveryPointsHelper(points, selectedPoint);

  return (
    <div className="flex flex-col gap-2">
      <span className={FORM_FIELD_LABEL_CLASS_NAME}>{DELIVERY_POINTS_TITLES[method]}</span>

      {!hasFailed && <DeliveryPointsSearch value={searchTerm} onChange={setSearchTerm} />}

      {isLoading && <DeliveryPointsSkeleton />}

      {hasFailed && (
        <span className="px-1 text-[13px] text-error-dark">{DELIVERY_POINTS_ERROR_LABEL}</span>
      )}

      {isManual && (
        <DeliveryManualPoint
          method={method}
          city={city}
          value={manualPoint}
          onChange={onManualPointChange}
        />
      )}

      {points && visiblePoints.length === 0 && (
        <span className="px-1 text-[13px] text-muted-light">{DELIVERY_POINTS_EMPTY_LABEL}</span>
      )}

      {visiblePoints.length > 0 && (
        <DeliveryPointsList
          label={DELIVERY_POINTS_TITLES[method]}
          points={visiblePoints}
          selectedPointId={selectedPoint?.id}
          isStale={isStale}
          onSelect={onSelect}
        />
      )}
    </div>
  );
};
