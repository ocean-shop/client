/** The header renders the desktop field, the mobile header the full-width one. */
export type HeaderSearchVariant = "desktop" | "mobile";

export type HeaderSearchProps = {
  variant: HeaderSearchVariant;
};
