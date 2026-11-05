export type RadioCardProps = {
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
  /** Sets the padding and the alignment, which differ between lists. */
  className?: string;
  children: React.ReactNode;
};
