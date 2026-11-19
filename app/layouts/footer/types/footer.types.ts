import type { ShopFeatures } from "@/app/shared/shop-settings/types/shop-settings.types";

export type FooterProps = {
  features: ShopFeatures;
};

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
