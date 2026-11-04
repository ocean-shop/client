export type CabinetActiveOrderProgressProps = {
  /** How many of the bars are filled. */
  progress: number;
  shippingNote: string;
  /** Already formatted, e.g. "9 жовтня". */
  expectedDelivery: string | null;
};
