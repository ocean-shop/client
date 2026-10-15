export type InfoMenuItem = {
  href: string;
  icon: string;
  label: string;
  /** Fits the chip row on mobile and tablet. */
  shortLabel: string;
};

export type InfoMenuGroup = {
  title: string;
  /** Where the group's breadcrumb step leads: its first page. */
  href: string;
  items: InfoMenuItem[];
};

export type InfoMenuEntry = {
  group: InfoMenuGroup;
  item: InfoMenuItem;
};
