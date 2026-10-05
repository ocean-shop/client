export type BreadcrumbItem = {
  label: string;
  href?: string;
  /** For a step that is not a page of its own, such as the cart, which opens as a modal. */
  onClick?: () => void;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};
