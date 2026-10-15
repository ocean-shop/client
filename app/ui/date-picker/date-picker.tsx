"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/app/ui/button/button";
import { DatePickerCalendar } from "./components/date-picker-calendar/date-picker-calendar";
import {
  DATE_PICKER_CLEAR_LABEL,
  DATE_PICKER_CLOSE_KEY,
  DATE_PICKER_DEFAULT_PLACEHOLDER,
  DATE_PICKER_DEFAULT_VIEW,
  DATE_PICKER_POPOVER_CLASS_NAME,
  DATE_PICKER_TRIGGER_CLASS_NAME,
  DATE_PICKER_TRIGGER_STATE_CLASS_NAMES,
} from "./constants/date-picker.constants";
import { formatDatePickerLabelHelper } from "./helpers/format-date-picker-label";
import type { DatePickerProps } from "./types/date-picker.types";

/** A field-styled button that opens a calendar; the value goes in and out as `YYYY-MM-DD`. */
export function DatePicker({
  value,
  onChange,
  min,
  max,
  initialView = DATE_PICKER_DEFAULT_VIEW,
  placeholder = DATE_PICKER_DEFAULT_PLACEHOLDER,
  id,
  disabled,
  invalid,
  clearable,
  ...ariaProps
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverId = useId();

  const label = formatDatePickerLabelHelper(value);
  const stateClassName = isOpen
    ? DATE_PICKER_TRIGGER_STATE_CLASS_NAMES.open
    : invalid
      ? DATE_PICKER_TRIGGER_STATE_CLASS_NAMES.invalid
      : DATE_PICKER_TRIGGER_STATE_CLASS_NAMES.default;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== DATE_PICKER_CLOSE_KEY) return;

      setIsOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(nextValue: string | null) {
    onChange(nextValue);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div ref={rootRef} className="relative min-w-0">
      <button
        ref={triggerRef}
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? popoverId : undefined}
        onClick={() => setIsOpen((open) => !open)}
        className={`${DATE_PICKER_TRIGGER_CLASS_NAME} ${stateClassName}`}
        {...ariaProps}
      >
        <span className={`truncate ${label ? "text-foreground" : "text-muted-light"}`}>
          {label ?? placeholder}
        </span>
        <span className="font-symbols text-xl text-muted-light">event</span>
      </button>

      {isOpen && (
        <div id={popoverId} role="dialog" className={DATE_PICKER_POPOVER_CLASS_NAME}>
          <DatePickerCalendar
            value={value}
            min={min}
            max={max}
            initialView={initialView}
            onSelect={handleSelect}
          />

          {clearable && value && (
            <div className="mt-2 flex justify-end border-t border-border-soft pt-2">
              <Button
                variant="text"
                size="auto"
                onClick={() => handleSelect(null)}
                className="h-8 px-2 text-[13.5px]"
              >
                {DATE_PICKER_CLEAR_LABEL}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
