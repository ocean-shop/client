import type { SurfaceCardElement, SurfaceCardPadding } from "../types/surface-card.types";

export const SURFACE_CARD_DEFAULT_ELEMENT: SurfaceCardElement = "div";
export const SURFACE_CARD_DEFAULT_PADDING: SurfaceCardPadding = "md";

export const SURFACE_CARD_BASE_CLASS_NAME = "rounded-2xl bg-background";

export const SURFACE_CARD_PADDING_CLASS_NAMES: Record<SurfaceCardPadding, string> = {
  none: "",
  sm: "p-4 lg:p-5",
  md: "p-[18px] lg:p-6",
};
