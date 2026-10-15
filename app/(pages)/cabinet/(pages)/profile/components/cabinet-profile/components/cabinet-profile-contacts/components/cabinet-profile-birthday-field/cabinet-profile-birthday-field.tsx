"use client";

import { useId } from "react";
import { DatePicker } from "@/app/ui/date-picker/date-picker";
import { getDatePickerTodayHelper } from "@/app/ui/date-picker/helpers/get-date-picker-today";
import type { CabinetProfileBirthdayFieldProps } from "./types/cabinet-profile-birthday-field.types";

/**
 * Not wrapped in a `<label>` like the text fields: a label would forward every click inside the
 * calendar back to the trigger. It only renders in edit mode, so reading today here can't cause a
 * hydration mismatch.
 */
export function CabinetProfileBirthdayField({
  label,
  value,
  min,
  onChange,
  disabled,
}: CabinetProfileBirthdayFieldProps) {
  const labelId = useId();
  const pickerId = useId();

  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span id={labelId} className="text-[13px] font-medium text-muted">
        {label}
      </span>
      {/* Naming the trigger after both the label and itself keeps the picked date in what's read out. */}
      <DatePicker
        id={pickerId}
        aria-labelledby={`${labelId} ${pickerId}`}
        value={value}
        min={min}
        max={getDatePickerTodayHelper()}
        initialView="years"
        clearable
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}
