"use client";

import { useEffect, useEffectEvent, type RefObject } from "react";

/** Calls `onOutside` when a pointer goes down outside `ref`'s element, while `enabled`. */
export const useOutsidePointerDown = (
  ref: RefObject<HTMLElement | null>,
  onOutside: () => void,
  enabled = true
) => {
  const handleOutside = useEffectEvent(onOutside);

  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) handleOutside();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [ref, enabled]);
};
