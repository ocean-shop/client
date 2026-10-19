export type NavDrawerLink = {
  label: string;
  href: string;
};

export type NavDrawerGroup = {
  title: string;
  items: NavDrawerLink[];
};

export type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
