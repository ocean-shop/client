"use client";

import { useRef, useState } from "react";
import { useEscapeKey } from "@/app/core/hooks/use-escape-key";
import { useOutsidePointerDown } from "@/app/core/hooks/use-outside-pointer-down";
import { DELIVERY_POPULAR_CITIES } from "@/app/shared/delivery/constants/delivery.constants";
import type { DeliveryCity } from "@/app/shared/delivery/types/delivery.types";
import { FORM_FIELD_LABEL_CLASS_NAME } from "@/app/ui/form-field/constants/form-field.constants";
import { DeliveryCityMenu } from "./components/delivery-city-menu/delivery-city-menu";
import { DeliveryCityTrigger } from "./components/delivery-city-trigger/delivery-city-trigger";
import { DELIVERY_CITY_SELECT_LABEL } from "./constants/delivery-city-select.constants";
import { getDeliveryCitySelectStatusHelper } from "./helpers/get-delivery-city-select-status";
import { useDeliveryCities } from "./hooks/use-delivery-cities";
import type { DeliveryCitySelectProps } from "./types/delivery-city-select.types";

export const DeliveryCitySelect = ({ city, onChange }: DeliveryCitySelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const { cities, hasSearchableTerm, isSearching, isError } = useDeliveryCities(searchTerm, isOpen);

  const options = hasSearchableTerm ? (cities ?? []) : DELIVERY_POPULAR_CITIES;
  const status = getDeliveryCitySelectStatusHelper({
    hasSearchableTerm,
    isSearching,
    isError,
    hasOptions: options.length > 0,
  });

  const close = () => setIsOpen(false);

  useOutsidePointerDown(selectRef, close, isOpen);
  useEscapeKey(close, isOpen);

  const handleSelect = (nextCity: DeliveryCity) => {
    close();
    setSearchTerm("");
    if (nextCity.id !== city.id) onChange(nextCity);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className={FORM_FIELD_LABEL_CLASS_NAME}>{DELIVERY_CITY_SELECT_LABEL}</span>

      <div ref={selectRef} className="relative">
        <DeliveryCityTrigger
          city={city}
          isOpen={isOpen}
          onToggle={() => setIsOpen((open) => !open)}
        />

        {isOpen && (
          <DeliveryCityMenu
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            status={status}
            options={options}
            selectedCityId={city.id}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
};
