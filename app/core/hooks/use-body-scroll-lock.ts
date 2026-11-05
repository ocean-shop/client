"use client";

import { useEffect } from "react";

/** Stops the page behind an overlay from scrolling along with it, while `enabled`. */
export const useBodyScrollLock = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [enabled]);
};
