export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterSupportInfo = {
  title: string;
  phone: string;
  email: string;
  hours: string;
};
