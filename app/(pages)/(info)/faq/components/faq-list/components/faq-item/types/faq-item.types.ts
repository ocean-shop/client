import type { FaqEntry } from "../../../types/faq-list.types";

export type FaqItemProps = {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
};
