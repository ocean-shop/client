export type NavDrawerGroup = {
  title: string;
  items: string[];
};

export type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
