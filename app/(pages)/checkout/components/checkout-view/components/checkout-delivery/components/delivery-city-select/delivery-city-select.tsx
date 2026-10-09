"use client";

import { useEffect, useRef, useState } from "react";
import { DELIVERY_POPULAR_CITIES } from "@/app/shared/delivery/constants/delivery.constants";
import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";
import { Input } from "@/app/ui/input/input";
import {
  DELIVERY_CITY_SELECT_CLOSE_KEY,
  DELIVERY_CITY_SELECT_EMPTY_LABEL,
  DELIVERY_CITY_SELECT_LABEL,
  DELIVERY_CITY_SELECT_POPULAR_LABEL,
  DELIVERY_CITY_SELECT_SEARCHING_LABEL,
  DELIVERY_CITY_SELECT_SEARCH_PLACEHOLDER,
} from "./constants/delivery-city-select.constants";
import { useDeliveryCities } from "./hooks/use-delivery-cities";
import type { DeliveryCitySelectProps } from "./types/delivery-city-select.types";

export function DeliveryCitySelect({ city, onChange }: DeliveryCitySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const { cities, hasSearchableTerm, isSearching } = useDeliveryCities(searchTerm, isOpen);

  const options = hasSearchableTerm ? (cities ?? []) : DELIVERY_POPULAR_CITIES;
  const status = !hasSearchableTerm
    ? DELIVERY_CITY_SELECT_POPULAR_LABEL
    : isSearching
      ? DELIVERY_CITY_SELECT_SEARCHING_LABEL
      : options.length === 0
        ? DELIVERY_CITY_SELECT_EMPTY_LABEL
        : null;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === DELIVERY_CITY_SELECT_CLOSE_KEY) setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(nextCity: DeliveryCity) {
    setIsOpen(false);
    setSearchTerm("");
    if (nextCity.id !== city.id) onChange(nextCity);
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-muted">{DELIVERY_CITY_SELECT_LABEL}</span>

      <div ref={selectRef} className="relative">
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-[46px] w-full items-center gap-2.5 rounded-[11px] border border-footer-border bg-background px-3.5 text-left hover:border-accent"
        >
          <span className="font-symbols text-xl text-accent">location_on</span>
          <span className="min-w-0 flex-1 truncate text-[14.5px] text-foreground">
            {city.name}
            {city.region && <span className="text-muted-light">, {city.region}</span>}
          </span>
          <span className="font-symbols text-xl text-muted-light">
            {isOpen ? "expand_less" : "expand_more"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute inset-x-0 top-[52px] z-10 flex flex-col gap-1 rounded-xl border border-border-soft bg-background p-1.5 shadow-[0_18px_40px_-22px_rgba(17,28,45,.45)]">
            <Input
              variant="outline"
              size="md"
              autoFocus
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={DELIVERY_CITY_SELECT_SEARCH_PLACEHOLDER}
            />

            {status && <span className="px-3 pt-1.5 text-[12.5px] text-muted-light">{status}</span>}

            <div className="flex max-h-[280px] flex-col overflow-y-auto">
              {options.map((option) => {
                const isSelected = option.id === city.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`flex items-center justify-between gap-3 rounded-[9px] px-3 py-2.5 text-left text-sm text-foreground hover:bg-surface ${
                      isSelected ? "bg-surface font-semibold" : "font-normal"
                    }`}
                  >
                    <span>{option.name}</span>
                    <span className="text-right text-[12.5px] font-normal text-muted-light">
                      {option.region}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
