export type SurfaceCardElement = "div" | "section" | "li" | "article" | "nav";

/** `md` is a full section of a page; `sm` is one tile of a grid; `none` leaves spacing to `className`. */
export type SurfaceCardPadding = "none" | "sm" | "md";

export type SurfaceCardProps = {
  as?: SurfaceCardElement;
  padding?: SurfaceCardPadding;
  className?: string;
  children: React.ReactNode;
};
