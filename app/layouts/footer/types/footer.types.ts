export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterSupportInfo {
  title: string;
  phone: string;
  email: string;
  hours: string;
}
