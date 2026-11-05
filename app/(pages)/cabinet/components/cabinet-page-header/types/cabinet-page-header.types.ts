export type CabinetPageHeaderProps = {
  title: string;
  text?: string;
  /** Phones show the section in the navigation, so the header is desktop-only unless the text matters there too. */
  isTextAlwaysVisible?: boolean;
};
