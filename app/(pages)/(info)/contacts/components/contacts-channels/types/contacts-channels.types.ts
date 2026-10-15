export type ContactsChannel = {
  icon: string;
  label: string;
  value: string;
  /** `tel:`, `mailto:` or a messenger link. */
  href: string;
  note: string;
};

export type ContactsChannelsProps = {
  channels: ContactsChannel[];
};
