export type SelectOption = {
  id: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
  label?: string;
  /** Controls the selection from outside; falls back to internal state when omitted. */
  selectedId?: string;
  defaultSelectedId?: string;
  onChange?: (id: string) => void;
};
