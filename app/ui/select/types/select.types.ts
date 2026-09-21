export type SelectOption = {
  id: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
  label?: string;
  defaultSelectedId?: string;
  onChange?: (id: string) => void;
};
