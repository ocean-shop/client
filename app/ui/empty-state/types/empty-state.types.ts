export type EmptyStateLink = {
  href: string;
  label: string;
};

export type EmptyStateProps = {
  label: string;
  /** Material Symbols name shown above the label. */
  icon?: string;
  link?: EmptyStateLink;
  /** Sets the padding and the gap, which differ between lists. */
  className?: string;
};
