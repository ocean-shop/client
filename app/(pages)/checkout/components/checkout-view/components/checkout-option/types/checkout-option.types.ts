export type CheckoutOptionProps = {
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
  /** Padding and alignment differ between carriers, pick-up points and payment methods. */
  className?: string;
  children: React.ReactNode;
};
