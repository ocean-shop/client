export type InfoCheckListVariant = "check" | "close";

/** `stack` is a single column; `grid` splits into two columns from tablets up. */
export type InfoCheckListLayout = "stack" | "grid";

export type InfoCheckListProps = {
  items: string[];
  variant?: InfoCheckListVariant;
  layout?: InfoCheckListLayout;
};
