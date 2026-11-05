export type SideNavLinkProps = {
  href: string;
  /** Material Symbols name, e.g. `local_shipping`. */
  icon: string;
  isActive: boolean;
  /** Sets the row's height, which differs between menus. */
  className?: string;
  children: React.ReactNode;
};
