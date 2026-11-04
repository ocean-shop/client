export type SurfaceCardElement = "div" | "section" | "li";

/** `md` is a full section of a page; `sm` is one tile of a grid. */
export type SurfaceCardPadding = "sm" | "md";

export type SurfaceCardProps = {
  as?: SurfaceCardElement;
  padding?: SurfaceCardPadding;
  className?: string;
  children: React.ReactNode;
};
