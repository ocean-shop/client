export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  /** Muted text set on the title's baseline, e.g. an item count. */
  subtitle?: string;
  closeLabel?: string;
  /** Pinned under the scrolling body; styled by the caller. */
  footer?: React.ReactNode;
  children: React.ReactNode;
};
