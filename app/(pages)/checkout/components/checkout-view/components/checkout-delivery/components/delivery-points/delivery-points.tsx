"use client";

import { useState } from "react";
import { Input } from "@/app/ui/input/input";
import { CheckoutOption } from "../../../checkout-option/checkout-option";
import {
  DELIVERY_POINTS_EMPTY_LABEL,
  DELIVERY_POINTS_ERROR_LABEL,
  DELIVERY_POINTS_SEARCH_PLACEHOLDER,
  DELIVERY_POINTS_SKELETON_ROWS,
  DELIVERY_POINTS_TITLES,
} from "./constants/delivery-points.constants";
import { useDeliveryPoints } from "./hooks/use-delivery-points";
import type { DeliveryPointsProps } from "./types/delivery-points.types";

export function DeliveryPoints({
  carrier,
  method,
  city,
  selectedPoint,
  onSelect,
}: DeliveryPointsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { points, isLoading, isError, isStale } = useDeliveryPoints({
    carrier,
    method,
    city,
    searchTerm,
  });

  // A search can hide the chosen point, so it stays pinned on top of the results.
  const isSelectedListed = points?.some((point) => point.id === selectedPoint?.id);
  const visiblePoints = [
    ...(selectedPoint && !isSelectedListed ? [selectedPoint] : []),
    ...(points ?? []),
  ];

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-muted">{DELIVERY_POINTS_TITLES[method]}</span>

      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-symbols text-xl text-muted-light">
          search
        </span>
        <Input
          variant="outline"
          size="xl"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={DELIVERY_POINTS_SEARCH_PLACEHOLDER}
          className="pl-11"
        />
      </div>

      {isLoading && (
        <div className="flex animate-pulse flex-col gap-2">
          {Array.from({ length: DELIVERY_POINTS_SKELETON_ROWS }, (_, index) => (
            <div key={index} className="h-[78px] rounded-xl bg-surface" />
          ))}
        </div>
      )}

      {isError && !points && (
        <span className="px-1 text-[13px] text-error-dark">{DELIVERY_POINTS_ERROR_LABEL}</span>
      )}

      {points && visiblePoints.length === 0 && (
        <span className="px-1 text-[13px] text-muted-light">{DELIVERY_POINTS_EMPTY_LABEL}</span>
      )}

      {visiblePoints.length > 0 && (
        <div
          role="radiogroup"
          aria-label={DELIVERY_POINTS_TITLES[method]}
          className={`flex max-h-[360px] flex-col gap-2 overflow-y-auto transition-opacity ${
            isStale ? "opacity-60" : ""
          }`}
        >
          {visiblePoints.map((point) => (
            <CheckoutOption
              key={point.id}
              isSelected={point.id === selectedPoint?.id}
              onSelect={() => onSelect(point)}
              disabled={isStale}
              className="items-start px-3.5 py-3"
            >
              <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
                <span className="text-sm font-semibold">{point.title}</span>
                <span className="text-[13.5px] text-muted">{point.address}</span>
                {point.meta && <span className="text-[12.5px] text-muted-light">{point.meta}</span>}
              </span>
            </CheckoutOption>
          ))}
        </div>
      )}
    </div>
  );
}
