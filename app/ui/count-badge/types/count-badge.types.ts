export type CountBadgeSize = "sm" | "md" | "lg";

export type CountBadgeProps = {
  count: number;
  size: CountBadgeSize;
  /** Placement within the parent, e.g. `ml-auto`. */
  className?: string;
};
