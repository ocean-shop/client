export type NoticeCardLink = {
  href: string;
  label: string;
};

export type NoticeCardProps = {
  /** Material Symbols name shown above the title. */
  icon: string;
  title: string;
  text: string;
  link: NoticeCardLink;
};
