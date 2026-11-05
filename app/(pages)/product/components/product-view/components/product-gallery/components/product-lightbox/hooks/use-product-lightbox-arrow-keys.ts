import { useEffect, useEffectEvent } from "react";
import { PRODUCT_LIGHTBOX_KEY_STEPS } from "../constants/product-lightbox.constants";

/** Calls `onStep` with the direction of the arrow key pressed anywhere on the page. */
export const useProductLightboxArrowKeys = (onStep: (step: number) => void) => {
  const handleStep = useEffectEvent(onStep);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const step = PRODUCT_LIGHTBOX_KEY_STEPS[event.key];

      if (step !== undefined) handleStep(step);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
};
