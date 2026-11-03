"use client";

import { useRef, useState } from "react";
import { useOutsidePointerDown } from "@/app/core/hooks/use-outside-pointer-down";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  SELECT_MENU_CLASS_NAME,
  SELECT_OPTION_CLASS_NAME,
  SELECT_OPTION_STATE_CLASS_NAMES,
  SELECT_TRIGGER_CLASS_NAME,
} from "./constants/select.constants";
import type { SelectProps } from "./types/select.types";

export const Select = ({
  options,
  label,
  selectedId,
  defaultSelectedId,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedId, setInternalSelectedId] = useState(defaultSelectedId ?? options[0]?.id);
  const selectRef = useRef<HTMLDivElement>(null);

  const activeId = selectedId ?? internalSelectedId;
  const selectedOption = options.find((option) => option.id === activeId) ?? options[0];

  useOutsidePointerDown(selectRef, () => setIsOpen(false), isOpen);

  const handleSelect = (id: string) => {
    setInternalSelectedId(id);
    setIsOpen(false);
    onChange?.(id);
  };

  if (!selectedOption) return null;

  return (
    <div className="flex items-center gap-2.5">
      {label && <span className="text-[13.5px] text-muted-light">{label}</span>}

      <div ref={selectRef} className="relative">
        <Button
          variant="unstyled"
          size="auto"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className={SELECT_TRIGGER_CLASS_NAME}
        >
          {selectedOption.label}
          <MaterialIcon name="expand_more" className="text-xl text-muted-light" />
        </Button>

        {isOpen && (
          <div className={SELECT_MENU_CLASS_NAME}>
            {options.map((option) => {
              const isSelected = option.id === activeId;

              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(option.id)}
                  className={`${SELECT_OPTION_CLASS_NAME} ${
                    SELECT_OPTION_STATE_CLASS_NAMES[isSelected ? "selected" : "default"]
                  }`}
                >
                  <span className="w-[18px]">
                    {isSelected && <MaterialIcon name="check" className="text-lg text-accent" />}
                  </span>
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
