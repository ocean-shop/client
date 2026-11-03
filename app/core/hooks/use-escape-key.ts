"use client";

import { useEffect, useEffectEvent } from "react";
import { ESCAPE_KEY } from "./constants/keyboard.constants";

/** Calls `onEscape` when Escape is pressed anywhere on the page, while `enabled`. */
export const useEscapeKey = (onEscape: () => void, enabled = true) => {
  const handleEscape = useEffectEvent(onEscape);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) handleEscape();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);
};
