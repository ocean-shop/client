"use client";

import { useEffect, useState } from "react";

/** Returns `value` only after it has stayed unchanged for `delayMs`. */
export function useDebouncedValue<T>(value: T, delayMs: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delayMs);

    return () => clearTimeout(timeout);
  }, [value, delayMs]);

  return debouncedValue;
}
